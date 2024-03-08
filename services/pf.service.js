
const boom = require('@hapi/boom');
const { db,laboratorioPf } = require('../db/firebase');
const {  doc,addDoc, getDocs,getDoc,setDoc,deleteDoc,updateDoc, arrayUnion,query, where, collection} = require("firebase/firestore");
const { get } = require('../routes/pf.router');


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

    return {
      actualizar,
      message:'Actualizado'};
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
  async findAll(params){
    const { a } = params;
    const refService = `serviciosPf${a}`;

    try {
      const q = query(collection(db,refService));
      const servicios = await getDocs(q);
      if(!servicios){
        throw boom.notFound('No encontrado');
      }
      let respuesta = {}
      servicios.forEach(doc =>{
        respuesta[doc.id]=doc.data();
      });
      return {respuesta};

    } catch (error) {
     return {
      message:error
     }
    }
  }
  async findReports(a){
    const refInformes = collection(db,`informesPF${a}`);
    const informes = await getDocs(refInformes);
    let array = []
    if(informes){
      informes.forEach(informe =>{
        array.push(informe.data());
      })
      return {message:'Solicitado',length:array.length}
    }else{
      throw boom.notFound('No se encontro informe');
    }



  }
  async createService(body){
    const refService = `serviciosPf${body.año}`;
    const newServce = await addDoc(collection(db,refService),body);
    return { message:`Construido con ID ${newServce.id}`};
  }
  async createReport(body){
    const { informes, permisionario } = body;
    const refInformes = collection(db,`informesPF${body.año}`);
    // const newReport = await addDoc(refInformes,body.registro);
    informes.forEach(async(informe) =>{
      const objInforme = {
      }
      objInforme['actividad']=`${informe.froti.actividad_original} ${informe.froti.unidades}`;
      objInforme['empresa']=`${informe.permisionario.razon_social}`;
      objInforme['fecha_frotis']=informe.froti.fecha_frotis;
      objInforme['fecha_informe']=informe.froti.certificado.fecha_informe;
      objInforme['isotopo']=informe.froti.isotopo;
      objInforme['licencia']=informe.permisionario.licencia;
      objInforme['marca_fuente']=informe.froti.marca;
      objInforme['nombre_pdf']=informe.froti.certificado.nombre_pdf;
      objInforme['num_informe']=informe.froti.certificado.num_informe;
      objInforme['num_serie']=informe.froti.serie;
      objInforme['clienteId']=informe.clienteId;
      await addDoc(refInformes,objInforme);
    });


    // informes.forEach(froti =>{
    //   const obj = {
    //     actividad:`${froti.actividad_original} ${froti.unidades}`,
    //     clienteId,
    //     empresa:
    //   }

    // });
    console.log('[CREACION REPORTES]',body);
    return {
      message:'Registros Creados',
      respuesta:{
        informes,permisionario
      }
    }
  }
  async updateFrotis(body){

    const { año, status,id_servicio,id_frotis,fecha_entrega} = body;
    let array =[]
    const refFroti = `serviciosPf${año}`;
    const q = query(doc(db,refFroti,id_servicio));
    const documento = await getDoc(q);
    const registro = documento.data();

    if(documento.exists()){
      array = registro.frotis;
    }else{
      throw boom.notFound('Frotis no encontrado');
    }
    const index = array.findIndex(item=>item.id === id_frotis);
    if(index === -1){
      throw boom.notFound('Frotis no encontrado');
    }
    registro.frotis[index]['status']=status;
    registro.frotis[index]['fecha_entrega']=fecha_entrega;
    const actualizar = await setDoc(doc(db,refFroti,id_servicio),registro);

    return {actualizar}
  }
  async updateService(body){
    const { año,status,id_servicio,frotis } = body;

    const refServicio = doc(db,`serviciosPf${año}`,id_servicio);
    console.log(refServicio);
    const documento = await getDoc(refServicio);
    const res = documento.data();
    res.frotis = frotis;
    const actualizacionServicio = await setDoc(refServicio,res);
    return { actualizacionServicio };

  }
  async deleteService(params,body){
    console.log(params.id)
    const ref = doc(db,`serviciosPf${body.año}`,params.id);
    const eliminado= await deleteDoc(ref);
    return {
      message:'Eliminado',eliminado
    }
  }








}


module.exports = {
  pruebasFugaService,
  labPf
}
