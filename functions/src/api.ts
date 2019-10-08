import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as secure from 'securejs'
import * as _ from 'lodash'

import { ID_LENGTH } from './constants'

const app = express()
const firestore = admin.firestore()

export const api = functions.https.onRequest(app)

const documentFromPath = (path: string): FirebaseFirestore.DocumentReference =>
	firestore.doc(`api/${path}`)

const snapshotFromPath = (path: string): Promise<FirebaseFirestore.DocumentSnapshot> =>
	documentFromPath(path).get()

const createSendableRecord = (id: string, json: string): { id: string } & object => ({
	...JSON.parse(json),
	id
})

const newId = (): string =>
	secure.newId(ID_LENGTH)

// List all records
app.get('/:path', (req, res) =>
	snapshotFromPath(req.params.path).then(snapshot =>
		Object.entries(snapshot.data() || []).map(([id, json]: [string, string]) =>
			createSendableRecord(id, json)
		)
	).then(res.json.bind(res)).catch(() => res.status(500).json([]))
)

// Get record
app.get('/:path/:id', (req, res) => {
	const { path, id } = req.params
	return snapshotFromPath(path).then(snapshot => {
		const json = snapshot.get(id)
		json
			? res.json(createSendableRecord(id, json))
			: res.status(404).json({})
	})
})

// Create record
app.post('/:path', (req, res) => {
	const { params, body } = req
	const documentReference = documentFromPath(params.path)
	const id = newId()
	const updateObject = { [id]: JSON.stringify(_.omit(body, 'id')) }
	return documentReference.get().then(document =>
		document.exists
			? documentReference.update(updateObject)
			: documentReference.set(updateObject)
	).then(() => res.json({ ...body, id })).catch(() => res.status(500).json({}))
})

// Update all properties of a record
// app.put('/:path/:id', (req, res) => {
	
// })

// Update some properties of a record
// app.patch('/:path/:id', (req, res) => {
	
// })

// Delete record
// app.delete('/:path/:id', (req, res) => {
	
// })