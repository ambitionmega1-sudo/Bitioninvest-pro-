
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import { 
    getAuth 
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBYyad0-VSITsxsyp5pSq_Yg75OJW2224M",
  authDomain: "bitioninvest-pro.firebaseapp.com",
  projectId: "bitioninvest-pro",
  storageBucket: "bitioninvest-pro.firebasestorage.app",
  messagingSenderId: "957022507388",
  appId: "1:957022507388:web:a2178b15d99d15113e94f9",
  measurementId: "G-YCHXV4MSVQ"
};


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);


export {
    app,
    auth,
    db
};
