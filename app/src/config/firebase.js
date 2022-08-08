
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDT1wCA4qo12ueAnTCij7pJl0uMr7shnHo",
  authDomain: "leave-a-mark-ea10f.firebaseapp.com",
  projectId: "leave-a-mark-ea10f",
  storageBucket: "leave-a-mark-ea10f.appspot.com",
  messagingSenderId: "340992935325",
  appId: "1:340992935325:web:ccf5de7bac90355f911b74"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}