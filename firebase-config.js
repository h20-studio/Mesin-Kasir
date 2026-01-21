// Firebase Configuration for H20 Studio Kasir
// Import Firebase modules from CDN

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeTaP0IieEBktcclAov8NQcDUydpqBDfg",
    authDomain: "h20studio-81fb2.firebaseapp.com",
    projectId: "h20studio-81fb2",
    storageBucket: "h20studio-81fb2.firebasestorage.app",
    messagingSenderId: "1056605372759",
    appId: "1:1056605372759:web:f695f5a98d0823f1a6be12",
    measurementId: "G-23T5NNMD6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Export for use in main app
export { auth, db, googleProvider, signInWithPopup, signOut, onAuthStateChanged, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp };
