
import { 
    auth,
    db
} from "../firebase.js";


import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



const registerForm = document.getElementById("registerForm");


if(registerForm){

registerForm.addEventListener("submit", async (e)=>{

    e.preventDefault();


    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;


    const message = document.getElementById("message");



    try {


        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user = userCredential.user;



        await setDoc(doc(db,"users",user.uid),{

            name:name,
            email:email,
            balance:0,
            createdAt:new Date()

        });



        message.innerHTML =
        "Account created successfully!";


        setTimeout(()=>{

            window.location.href="login.html";

        },2000);



    } catch(error){


        message.innerHTML = error.message;


    }


});

}
