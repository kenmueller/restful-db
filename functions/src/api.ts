import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as secure from 'securejs'

import { ID_LENGTH } from './constants'

const app = express()
const firestore = admin.firestore()

export const api = functions.https.onRequest(app)

const getRecordsReference = (project: string, records: string): FirebaseFirestore.DocumentReference =>
	firestore.doc(`projects/${project}/data/${records}`)

const getRecordsSnapshot = (project: string, records: string): Promise<FirebaseFirestore.DocumentSnapshot> =>
	getRecordsReference(project, records).get()

const createSendableRecord = (id: string, json: string): { id: string } & object => ({
	...JSON.parse(json),
	id
})

const createSendableRecordsFromDocumentSnapshot = (snapshot: FirebaseFirestore.DocumentSnapshot): ({ id: string } & object)[] =>
	Object.entries(snapshot.data() || {}).map(([id, json]: [string, string]) =>
		createSendableRecord(id, json)
	)

const createRecord = (project: string, records: string, id: string, res: express.Response, data: object): Promise<express.Response> => {
	const updateObject = { [id]: JSON.stringify({ ...data, id: undefined }) }
	return getRecordsSnapshot(project, records).then(snapshot =>
		snapshot.exists
			? snapshot.ref.update(updateObject)
			: snapshot.ref.set(updateObject)
	).then(() => res.json({ ...data, id })).catch(() => res.status(500).json({}))
}

const newId = (): string =>
	secure.newId(ID_LENGTH)

const shouldDeleteRecordList = (records: FirebaseFirestore.DocumentData, deletedRecord: string): boolean => {
	const keys = Object.keys(records)
	return keys.length === 1 && keys[0] === deletedRecord
}

// Get all data for a project
app.get('/api/:project', ({ params: { project } }, res) =>
	firestore.collection(`projects/${project}/data`).get().then(snapshot =>
		snapshot.docs.reduce((acc, document) => ({
			...acc,
			[document.id]: createSendableRecordsFromDocumentSnapshot(document)
		}), {})
	).then(res.json.bind(res)).catch(() => res.status(500).json({}))
)

// List all records
app.get('/api/:project/:records', ({ params: { project, records } }, res) =>
	getRecordsSnapshot(project, records)
		.then(createSendableRecordsFromDocumentSnapshot)
		.then(res.json.bind(res))
		.catch(() => res.status(500).json([]))
)

// Get record
app.get('/api/:project/:records/:recordId', ({ params: { project, records, recordId } }, res) =>
	getRecordsSnapshot(project, records).then(snapshot => {
		const json = snapshot.get(recordId)
		return json
			? res.json(createSendableRecord(recordId, json))
			: res.status(404).json({})
	})
)

// Create record
app.post('/api/:project/:records', ({ params: { project, records }, body }, res) =>
	createRecord(project, records, newId(), res, body)
)

// Update all properties of a record
app.put('/api/:project/:records/:recordId', ({ params: { project, records, recordId }, body }, res) =>
	createRecord(project, records, recordId, res, body)
)

// Update some properties of a record
app.patch('/api/:project/:records/:recordId', ({ params: { project, records, recordId }, body }, res) =>
	getRecordsSnapshot(project, records).then(snapshot => {
		if (snapshot.exists) {
			const newRecord = {
				...JSON.parse(snapshot.get(recordId)),
				...body,
				id: undefined
			}
			return snapshot.ref
				.update({ [recordId]: JSON.stringify(newRecord) })
				.then(() => res.json({ ...newRecord, id: recordId }))
		}
		return snapshot.ref
			.set({ [recordId]: JSON.stringify({ ...body, id: undefined }) })
			.then(() => res.json({ ...body, id: recordId }))
	}).catch(() => res.status(500).json({}))
)

// Delete project
app.delete('/api/:project', ({ params: { project } }, res) =>
	firestore.doc(`projects/${project}`)
		.delete()
		.then(() => res.json())
		.catch(() => res.status(500).json())
)

// Delete record list
app.delete('/api/:project/:records', ({ params: { project, records } }, res) =>
	getRecordsReference(project, records)
		.delete()
		.then(() => res.json())
		.catch(() => res.status(500).json())
)

// Delete record
app.delete('/api/:project/:records/:recordId', ({ params: { project, records, recordId } }, res) =>
	getRecordsSnapshot(project, records).then(snapshot =>
		snapshot.exists
			? shouldDeleteRecordList(snapshot.data() || {}, recordId)
				? snapshot.ref.delete()
				: snapshot.ref.update({ [recordId]: admin.firestore.FieldValue.delete() })
			: Promise.resolve({})
	).then(() => res.json()).catch(() => res.status(500).json())
)