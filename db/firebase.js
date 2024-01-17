

const { initializeApp }=require("firebase/app");// Your web app's Firebase configuration
const { getFirestore, collection } = require("firebase/firestore");

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
const refNuevo = collection(db,'Nuevo');
const refCities = collection(db,'cities');
const laboratorioPf = collection(db,'laboratorioPf');

module.exports={
  db,
  laboratorioPf,
};
