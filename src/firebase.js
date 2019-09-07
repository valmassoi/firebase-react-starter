import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

const firebaseConfig = {} // TODO
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export const db = firebase.firestore()
db.settings({})

export const storage = firebase.storage()
export const storageRef = storage.ref()

export const functions = firebase.functions()


export default firebase
