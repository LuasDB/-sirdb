
const btn = document.getElementById('btn');
const base = document.getElementById('btn_crear');
const etiqueta=document.getElementById('etiqueta');
const pdf = new html2pdf();
const opciones = {
  margin:0,
  image:{type:'jpeg',quality:0.98},
  html2canvas:{ scale:2 },
  jsPDF:{ unit:'mm',format:'letter',orientation:'landscape'},
  pagebreak: {
    mode:['avoid-all','legacy']
  }
}

let pdfs =[]
const construir = async()=>{
  const ref2 = collection(bd,"informesPF2023");
  const q = query(ref2,where("clienteId","==",empresaId));
  const res = await getDocs(q);
  let data = []
  let nuevoData=[]
  let contador =0;
  res.forEach(e=>{
    if(contador === 6){
      nuevoData.push(data);
      data=[]
      contador =0;
    }

    data.push(e.data());
    contador++;

  })
  let documento = [];
  contador=0;
  data=[]

  nuevoData.forEach(document=>{
    if(contador === 10){
      documento.push(data)
      data=[]
      contador=0
    }
    data.push(document);
    contador++;
  });
  documento.push(data);

  console.log(documento)

  contador=0;
  data=[]
  documento.forEach(doc=>{
    const archivo = document.createElement('div');
    const name=`archivo${contador}`;
    archivo.id=name;
    doc.forEach(array=>{
      let section= document.createElement('section');
      let salto = document.createElement('div');
      salto.classList.add('html2pdf__page-break');
      array.forEach(e=>{
        let article = document.createElement('article');
        article.innerHTML=`
        <div class="icon-tittle">
          </div>
            <label for="">Nombre de la empresa <p>
              ${e.num_serie}
            </p>
          <label for="">Direccion <p>
          </p>
          <div class="icon-tittle">
            <span class="material-symbols-outlined">
              engineering
              </span> Datos de la fuente
          </div>
          </label>
          <div class="col-2">
            <label for="">Marca
              <p>SCHLUMBERGER</p>
            </label>
          </div>
          <label for="">Número de serie
            <p>AG458</p>
          </label>
          <div class="col-2">
            <label for="">Isóptopo
              <p>Cs-137</p>
            </label>
            <label for="">Actividad
              <p>1.1 GBq</p>
            </label>
          </div>
        `;
        section.appendChild(article);
      });

      archivo.appendChild(section);
      archivo.appendChild(salto);



    })
    etiqueta.appendChild(archivo);
    contador++;
    pdfs.push(name);

  })
  console.log(pdfs)


  }


base.addEventListener('click',construir);
const crear = ()=>{

  pdfs.forEach(nombre=>{
    let item = document.getElementById(nombre);
    html2pdf(item, opciones);
    // setTimeout(() => {
    // pdf.set(opciones).from(item).save();

    // }, 1);
  })

}
btn.addEventListener('click',crear);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth,signOut,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getStorage,ref,uploadBytes,getDownloadURL,uploadBytesResumable ,getMetadata,updateMetadata} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
import { collectionGroup, collection, addDoc,getFirestore,query,where,getDocs,doc,setDoc,getDoc} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
const firebaseConfig = {
apiKey: "AIzaSyC2eIzzCPoMJS6-nzTayxeaCq4Sm8fqVJM",
authDomain: "sirdb-1d3ba.firebaseapp.com",
projectId: "sirdb-1d3ba",
storageBucket: "sirdb-1d3ba.appspot.com",
messagingSenderId: "844126039442",
appId: "1:844126039442:web:781bb173550e1560d1654b"
};


//Datos de inicio firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const bd = getFirestore(app);

const a = document.getElementById('anio');
let empresaId = 'h7MZ6wSR2BVJVxNa9qF9';






