import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as secure from 'securejs'

import { ID_LENGTH } from './constants'

const app = express()
const firestore = admin.firestore()

export const api = functions.https.onRequest(app)

const documentFromPath = (project: string, path: string): FirebaseFirestore.DocumentReference =>
	firestore.doc(`${project}/${path}`)

const snapshotFromPath = (project: string, path: string): Promise<FirebaseFirestore.DocumentSnapshot> =>
	documentFromPath(project, path).get()

const createSendableRecord = (id: string, json: string): { id: string } & object => ({
	...JSON.parse(json),
	id
})

const createSendableRecordsFromDocumentSnapshot = (snapshot: FirebaseFirestore.DocumentSnapshot): ({ id: string } & object)[] =>
	Object.entries(snapshot.data() || {}).map(([id, json]: [string, string]) =>
		createSendableRecord(id, json)
	)

const newId = (): string =>
	secure.newId(ID_LENGTH)

// Get all data for a project
app.get('/:project', (req, res) =>
	firestore.collection(req.params.project).get().then(snapshot =>
		snapshot.docs.reduce((acc, document) => ({
			...acc,
			[document.id]: createSendableRecordsFromDocumentSnapshot(document)
		}), {})
	).then(res.json.bind(res)).catch(() => res.status(500).json({}))
)

// List all records
app.get('/:project/:path', (req, res) => {
	const { project, path } = req.params
	return snapshotFromPath(project, path)
		.then(createSendableRecordsFromDocumentSnapshot)
		.then(res.json.bind(res))
		.catch(() => res.status(500).json([]))
})

// Get record
app.get('/:project/:path/:id', (req, res) => {
	const { project, path, id } = req.params
	return snapshotFromPath(project, path).then(snapshot => {
		const json = snapshot.get(id)
		return json
			? res.json(createSendableRecord(id, json))
			: res.status(404).json({})
	})
})

// Create record
app.post('/:project/:path', (req, res) => {
	const { params, body } = req
	const { project, path } = params
	const id = newId()
	const updateObject = { [id]: JSON.stringify({ ...body, id: undefined }) }
	return snapshotFromPath(project, path).then(snapshot =>
		snapshot.exists
			? snapshot.ref.update(updateObject)
			: snapshot.ref.set(updateObject)
	).then(() => res.json({ ...body, id })).catch(() => res.status(500).json({}))
})

// Update all properties of a record
// app.put('/:path/:id', (req, res) => {
// 	const { params, body } = req
// 	const { path, id } = params
// 	const documentReference = documentFromPath(path)
// 	return documentReference.get().then(snapshot =>
		
// 	)
// })

// Update some properties of a record
// app.patch('/:path/:id', (req, res) => {
	
// })

// Delete record
// app.delete('/:path/:id', (req, res) => {
	
// })