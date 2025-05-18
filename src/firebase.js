// Import Firebase core and Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy07TLh8Zot-dwpl1WzvwCJ9JWsBXuDtk",
  authDomain: "tasklist-8a247.firebaseapp.com",
  projectId: "tasklist-8a247",
  storageBucket: "tasklist-8a247.firebasestorage.app",
  messagingSenderId: "894220894054",
  appId: "1:894220894054:web:8860355083c3bf9dced2a7"
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore database for use in components
export { db };
