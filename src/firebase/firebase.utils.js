import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyDtgRRSG-50GiYrNWbaOlp6X44muuGpolQ',
	authDomain: 'luxarygoods-ffd5a.firebaseapp.com',
	databaseURL: 'https://luxarygoods-ffd5a.firebaseio.com',
	projectId: 'luxarygoods-ffd5a',
	storageBucket: 'luxarygoods-ffd5a.appspot.com',
	messagingSenderId: '1005328333232',
	appId: '1:1005328333232:web:ef3803da0d59d7a4337e75',
	measurementId: 'G-E8WLNQ08E8',
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const addCollection = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDoc = collectionRef.doc()
    batch.set(newDoc, obj)
  })
 return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.doc.map(doc => {
    const { title, items } = doc.data()
    return {
      routerName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 