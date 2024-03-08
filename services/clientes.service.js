
const boom= require('@hapi/boom');
const { db,laboratorioPf } = require('../db/firebase');
const {  doc,addDoc, getDocs,getDoc,setDoc,deleteDoc,updateDoc, arrayUnion,query, where, collection} = require("firebase/firestore");
const crypto = require('crypto');
const generarContraseña =(longitud)=>{
  // Longitud predeterminada de la contraseña
  longitud = longitud || 12;

  // Crear una cadena de bytes aleatorios
  const bytes = crypto.randomBytes(longitud);

  // Convertir los bytes en una cadena base64 legible
  const contraseña = bytes.toString('base64')
      // Eliminar caracteres no deseados
      .replace(/[/+=]/g, '')
      // Tomar solo la longitud deseada
      .slice(0, longitud);

  return contraseña;
}


class Cliente {
  constructor(){

  }
  async findAll(){
    const clientes = await getDocs(collection(db,'clientes'));
    if(!clientes) throw boom.notFound('Colección de clientes no encontrada');

    let datos =[]
    clientes.forEach(cliente=>{
      const id_cliente = cliente.id;
      datos.push({id_cliente:id_cliente,...cliente.data()})
    })

    return {clientes:datos}
  }

  async create(body){
    const contraseña= generarContraseña(12);
    const response = await addDoc(collection(db,'clientes'),{contraseña:contraseña,...body});
    return {message:'Cliente creado', id:response.id,contraseña,correo_cliente:body.correo_contacto,body}
  }

}

module.exports = {Cliente}
