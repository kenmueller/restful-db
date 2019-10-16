import * as admin from 'firebase-admin'
import * as express from 'express'
import * as secure from 'securejs'

import { ID_LENGTH } from '../constants'
import { Record, RecordData } from '../types'

const firestore = admin.firestore()

export const getRecordsReference = (project: string, records: string): FirebaseFirestore.DocumentReference =>
	firestore.doc(`projects/${project}/data/${records}`)

export const getRecordsSnapshot = (project: string, records: string): Promise<FirebaseFirestore.DocumentSnapshot> =>
	getRecordsReference(project, records).get()

	export const createSendableRecord = (id: string, json: string): Record => ({
	...JSON.parse(json),
	id
})

export const createSendableRecordsFromDocumentSnapshot = (snapshot: FirebaseFirestore.DocumentSnapshot): Record[] =>
	Object.entries(snapshot.data() || {}).map(([id, json]: [string, string]) =>
		createSendableRecord(id, json)
	)

export const createRecord = (project: string, records: string, id: string, res: express.Response, data: RecordData): Promise<express.Response> => {
	const updateObject = { [id]: JSON.stringify({ ...data, id: undefined }) }
	return getRecordsSnapshot(project, records).then(snapshot =>
		snapshot.exists
			? snapshot.ref.update(updateObject)
			: snapshot.ref.set(updateObject)
	).then(() => res.json({ ...data, id })).catch(() => res.status(500).json({}))
}

export const newId = (): string =>
	secure.newId(ID_LENGTH)

export const shouldDeleteRecordList = (records: FirebaseFirestore.DocumentData, deletedRecord: string): boolean => {
	const keys = Object.keys(records)
	return keys.length === 1 && keys[0] === deletedRecord
}
