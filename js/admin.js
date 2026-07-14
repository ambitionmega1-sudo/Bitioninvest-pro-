
import { db } from "../firebase.js";


import {
    collection,
    getDocs,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



const userList = document.getElementById("userList");

const updateBtn = document.getElementById("updateBalance");

const message = document.getElementById("adminMessage");



async function loadUsers(){


    const usersSnapshot = await getDocs(
        collection(db,"users")
    );


    userList.innerHTML = "";


    usersSnapshot.forEach((user)=>{


        const data = user.data();


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
        <b>ID:</b> ${user.id}
        </p>

        </div>

        `;


    });


}



updateBtn.addEventListener("click", async ()=>{


    const id =
    document.getElementById("userId").value;


    const balance =
    document.getElementById("newBalance").value;



    if(!id || !balance){

        message.innerHTML =
        "Please enter user ID and balance";

        return;

    }



    try{


        await updateDoc(
            doc(db,"users",id),
            {
                balance:Number(balance)
            }
        );


        message.innerHTML =
        "Balance updated successfully";


        loadUsers();



    }catch(error){


        message.innerHTML =
        error.message;


    }


});



loadUsers();
