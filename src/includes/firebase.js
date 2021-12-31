import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBB-mLCsXl2cYcjOgJFL7wUZzOtEcm_naw',
  authDomain: 'music-892be.firebaseapp.com',
  projectId: 'music-892be',
  storageBucket: 'music-892be.appspot.com',
  appId: '1:812970178368:web:17ee6744371682897eaca5',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
