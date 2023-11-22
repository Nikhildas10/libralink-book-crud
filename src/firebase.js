import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAL2Rot0OSlrCIFn3RPqr-HjyD-SmWchr8",
  authDomain: "libralink-b74b6.firebaseapp.com",
  projectId: "libralink-b74b6",
  storageBucket: "libralink-b74b6.appspot.com",
  messagingSenderId: "837167812125",
  appId: "1:837167812125:web:c6aa26696bf2e8e3b2c0f4",
};

const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)