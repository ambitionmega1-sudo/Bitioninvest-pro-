
import { auth, db } from "../firebase.js";


import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



const profileName = document.getElementById("profileName");

const profileEmail = document.getElementById("profileEmail");

const logoutBtn = document.getElementById("logoutBtn");



onAuthStateChanged(auth, async (user)=>{


    if(user){


        const userRef = doc(db,"users",user.uid);

        const userSnap = await getDoc(userRef);



        if(userSnap.exists()){


            const data = userSnap.data();


            profileName.innerHTML =
            data.name;


            profileEmail.innerHTML =
            data.email;


        }



    } else {


        window.location.href="login.html";


    }


});



logoutBtn.addEventListener("click", async ()=>{


    await signOut(auth);


    window.location.href="login.html";


});
