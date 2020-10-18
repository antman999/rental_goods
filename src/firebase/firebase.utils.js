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

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 