
import { auth } from "../firebase.js";


import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";



const loginForm = document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener("submit", async (e)=>{


    e.preventDefault();


    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;

    const message = document.getElementById("loginMessage");



    try{


        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        message.innerHTML =
        "Login successful!";


        setTimeout(()=>{

            window.location.href="dashboard.html";

        },1500);



    }catch(error){


        message.innerHTML =
        error.message;


    }


});


}
