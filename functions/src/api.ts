import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'

const app = express()
const firestore = admin.firestore()

export const api = functions.https.onRequest(app)

// List all records
app.get('/:path', (req, res) =>
	firestore.collection(`api/${req.params.path}`).get().then(snapshot =>
		snapshot.docs.map(doc =>
			Object.entries(doc.data()).map(([id, json]: [string, string]) => ({
				...JSON.parse(json), id
			}))
		)
	).then(res.json.bind(res)).catch(() => res.status(500).json([]))
)

// Get record
app.get('/:path/:id', (req, res) => {
	
})

// Create record
app.post('/:path', (req, res) => {
	
})

// Update all properties of a record
app.put('/:path/:id', (req, res) => {
	
})

// Update some properties of a record
app.patch('/:path/:id', (req, res) => {
	
})

// Delete record
app.delete('/:path/:id', (req, res) => {
	
})