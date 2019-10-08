import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'

const app = express()
const firestore = admin.firestore()

export const api = functions.https.onRequest(app)

const snapshotFromPath = (path: string): Promise<FirebaseFirestore.DocumentSnapshot> =>
	firestore.doc(`api/${path}`).get()

const createSendableRecord = (id: string, json: string): { id: string } & object => ({
	...JSON.parse(json),
	id
})

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
// app.post('/:path', (req, res) => {
	
// })

// Update all properties of a record
// app.put('/:path/:id', (req, res) => {
	
// })

// Update some properties of a record
// app.patch('/:path/:id', (req, res) => {
	
// })

// Delete record
// app.delete('/:path/:id', (req, res) => {
	
// })