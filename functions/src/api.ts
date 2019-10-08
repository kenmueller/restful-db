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

// Get all data for a project
app.get('/api/:project', (req, res) =>
	firestore.collection(`projects/${req.params.project}/data`).get().then(snapshot =>
		snapshot.docs.reduce((acc, document) => ({
			...acc,
			[document.id]: createSendableRecordsFromDocumentSnapshot(document)
		}), {})
	).then(res.json.bind(res)).catch(() => res.status(500).json({}))
)

// List all records
app.get('/api/:project/:records', (req, res) => {
	const { project, records } = req.params
	return getRecordsSnapshot(project, records)
		.then(createSendableRecordsFromDocumentSnapshot)
		.then(res.json.bind(res))
		.catch(() => res.status(500).json([]))
})

// Get record
app.get('/api/:project/:records/:recordId', (req, res) => {
	const { project, records, recordId } = req.params
	return getRecordsSnapshot(project, records).then(snapshot => {
		const json = snapshot.get(recordId)
		return json
			? res.json(createSendableRecord(recordId, json))
			: res.status(404).json({})
	})
})

// Create record
app.post('/api/:project/:records', (req, res) => {
	const { params, body } = req
	const { project, records } = params
	return createRecord(project, records, newId(), res, body)
})

// Update all properties of a record
app.put('/api/:project/:records/:id', (req, res) => {
	const { params, body } = req
	const { project, records, id } = params
	return createRecord(project, records, id, res, body)
})

// Update some properties of a record
// app.patch('/:project/:path/:id', (req, res) => {
// 	const { params, body } = req
// 	const { project, path, id } = params
// 	return snapshotFromPath(project, path).then(snapshot =>
// 		snapshot.exists
// 			? snapshot.ref.update({
// 				...snapshot.get(id) || {},

// 			})
// 			: snapshot.ref.set(updateObject)
// 	).then(() => res.json({ ...data, id })).catch(() => res.status(500).json({}))
// })

// Delete record
// app.delete('/:path/:id', (req, res) => {
	
// })