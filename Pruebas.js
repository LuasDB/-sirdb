let fechas = ['2022-10-03','2021-10-03','2023-10-23','2021-11-03','2021-12-03','2023-10-13'];


console.log(fechas);
console.log(fechas.sort());
console.log(fechas.sort((a,b)=>{return new Date(a).getTime() > new Date(b).getTime()}));



let obj = {
    nom1:'uno',
    nom2:'dos',
    reg:{
        uno:'1'
    }
}

console.log(obj);

let nvo={}
nvo['dos']='2';
obj['reg']['dos']['decimal']='2'
console.log(obj);


 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getStorage,ref,uploadBytes,getDownloadURL,uploadBytesResumable ,getMetadata,updateMetadata} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
 import {  collection, addDoc,getFirestore,where,query} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyC2eIzzCPoMJS6-nzTayxeaCq4Sm8fqVJM",
     authDomain: "sirdb-1d3ba.firebaseapp.com",
     projectId: "sirdb-1d3ba",
     storageBucket: "sirdb-1d3ba.appspot.com",
     messagingSenderId: "844126039442",
     appId: "1:844126039442:web:781bb173550e1560d1654b"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

