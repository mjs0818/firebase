import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDn51bS0jBsRhiXZCmBYdxL7aj6D_pGCfY',
  authDomain: 'test-1c241.firebaseapp.com',
  databaseURL: 'https://test-1c241.firebaseio.com',
  projectId: 'test-1c241',
  storageBucket: 'test-1c241.appspot.com',
  messagingSenderId: '628108227892',
  appId: '1:628108227892:web:9d6f4239a8f30976d02161',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
