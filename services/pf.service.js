
const boom = require('@hapi/boom');
const { refNuevo,refCities,laboratorioPf } = require('../db/firebase');
const {  doc,addDoc, getDocs,setDoc,writeBatch,updateDoc, arrayUnion} = require("firebase/firestore");


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

  find(){
    return [];
  }

  findOne(collection,id){
    return {collection,id}
  }

  update(collection,id,changes){
    return {
      colelction,id,changes
    }
  }
  delete(collection,id){
    return {collection,id}
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
