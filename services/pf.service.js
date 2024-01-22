
const boom = require('@hapi/boom');
const { db,laboratorioPf } = require('../db/firebase');
const {  doc,addDoc, getDocs,getDoc,setDoc,writeBatch,updateDoc, arrayUnion,query, where} = require("firebase/firestore");


class labPf{

  constructor(){

  }

   async create(collection,data){
    let response;
    switch (collection) {
      case 'licencias':
        response = await updateDoc(doc(laboratorioPf,collection),{lista:arrayUnion(data.lista)});
        break;
      case 'fuentes':
        response = await updateDoc(doc(laboratorioPf,collection),{lista:arrayUnion(data.lista)});
        break;
      case 'equipos':
        response = await updateDoc(doc(laboratorioPf,collection),{lista:arrayUnion(data.lista)});
        break;
      case 'detectores':
        response = await updateDoc(doc(laboratorioPf,collection),{lista:arrayUnion(data.lista)});
        break;
      case 'personalPf':
        response = await updateDoc(doc(laboratorioPf,collection),{lista:arrayUnion(data.lista)});
        break;
      default:
        break;
    }
    return {
      message:"CREADO",
       response,
    };
  }

  async findAll(){
    const q= query(laboratorioPf);
    const snapshot = await getDocs(q);

    if(!snapshot){
      throw boom.notFound('No encontrado');
    }
    let respuesta = {}
    snapshot.forEach(doc =>{
      respuesta[doc.id]=doc.data();
    });
    return {respuesta};
  }

  async update(collection,id,changes){

    let array = [];
    const ref =doc(laboratorioPf,collection)
    const miDoc = await getDoc(ref);
    console.log(miDoc.exists());
    if(miDoc.exists()){
      array=miDoc.data().lista;
    }else{
      throw boom.notFound('No se encontro ese elemento');
    }
    const index = array.findIndex(campo => campo.id === id);
    if(index === -1){
      throw boom.notFound('ELEMENTO NO ENCONTRADO');
    }
    const copy = array[index];
    array[index]={
      ...copy,
      ...changes
    };

    const actualizar = await updateDoc(ref,{lista:array});

    return {actualizar};
  }

  async delete(collection,id){
    let array = [];
    const ref =doc(laboratorioPf,collection)
    const miDoc = await getDoc(ref);
    console.log(miDoc.exists());
    if(miDoc.exists()){
      array=miDoc.data().lista;
    }else{
      throw boom.notFound('No se encontro ese elemento');
    }
    const index = array.findIndex(campo => campo.id === id );
    if(index === -1){
      throw boom.notFound('No se encontro para eliminar');
    }
    array.splice(index,1);
    const actualizar = await updateDoc(ref,{lista:array});

    return {
      message:'Eliminado',
      actualizar
    }
  }
}


// Creamos una clase para la los servicios

class pruebasFugaService{

  constructor(){


  }
  async findAll(){

    try {
      const todo = await getDocs(refCities);
      return todo;


    } catch (error) {
      console.log('[ERROR CONSULTA]:',error);
      return error;
    }
  }
  async createCities(){
    console.log('[CREANDO]');
    try {
      const docRef = await addDoc(refNuevo,{
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log('Se agrego nuevo :',docRef.id);
      return docRef;

    } catch (error) {
      console.log('[ERROR CREANDO]:',error);
      return error;
    }


  }



}


module.exports = {
  pruebasFugaService,
  labPf
}
