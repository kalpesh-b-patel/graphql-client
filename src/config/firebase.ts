import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBT8Ws447uBBhfqU5kxVnxOqqN_Bdj-Qm0',
  authDomain: 'kp-firebase-authentication.firebaseapp.com',
  databaseURL: 'https://kp-firebase-authentication.firebaseio.com',
  projectId: 'kp-firebase-authentication',
  storageBucket: 'kp-firebase-authentication.appspot.com',
  messagingSenderId: '22180440909',
  appId: '1:22180440909:web:ed40ec56e40e7ad09aa504',
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const googleAuthProvider = GoogleAuthProvider;
