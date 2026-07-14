import { auth, db } from "../firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    collection,
    getDocs,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



const userList = document.getElementById("userList");
const updateBtn = document.getElementById("updateBalance");
const message = document.getElementById("adminMessage");



// CHANGE THIS TO YOUR ADMIN EMAIL

const adminEmail = andrewstephenson543@gmail.com




// Check admin access

onAuthStateChanged(auth, (user)=>{


    if(!user || user.email !== adminEmail){


        alert("Access denied");


        window.location.href = "login.html";


    } else {


        loadUsers();


    }


});





// Load users

async function loadUsers(){


    const snapshot = await getDocs(
        collection(db,"users")
    );


    userList.innerHTML = "";


    snapshot.forEach((item)=>{


        const data = item.data();


        userList.innerHTML += `

        <div class="card">

        <p>
        <b>Name:</b> ${data.name}
        </p>

        <p>
        <b>Email:</b> ${data.email}
        </p>

        <p>
        <b>Balance:</b> $${data.balance}
        </p>

        <p>
        <b>User ID:</b> ${item.id}
        </p>

        </div>

        `;


    });


}





// Update balance

updateBtn.addEventListener("click", async ()=>{


    const id =
    document.getElementById("userId").value;


    const balance =
    document.getElementById("newBalance").value;



    if(!id || !balance){


        message.innerHTML =
        "Enter user ID and balance";


        return;


    }



    await updateDoc(

        doc(db,"users",id),

        {
            balance:Number(balance)
        }

    );



    message.innerHTML =
    "Balance updated successfully";


    loadUsers();


});
