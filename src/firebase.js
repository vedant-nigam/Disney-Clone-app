import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAZHdkL9LJAmOBDqsEUR44XZqM-MC7-ZM",
  authDomain: "disney-clone-app-c4c9b.firebaseapp.com",
  projectId: "disney-clone-app-c4c9b",
  storageBucket: "disney-clone-app-c4c9b.appspot.com",
  messagingSenderId: "1046126019735",
  appId: "1:1046126019735:web:8ccff326a72caa3b5515d2",
  measurementId: "G-ZJYDV56BHQ"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const provider = new GoogleAuthProvider();
const storage=getStorage(app);
const auth = getAuth(app);
export { auth, provider, storage, db };
