const formulariosPf = [
`<h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
  <section class="card form-1">
  <span class="tittle">Nueva Licencia</span>
  <br>
  <label for="num_lic">Número Licencia</label>
  <input type="text" class="envioBd" name="num_lic" id="num_lic">
  <label for="nombre">Nombre</label>
  <input type="text" class="envioBd" name="nombre" id="nombre">
  <label for="razon_social">Razón social</label>
  <input type="text" class="envioBd" name="razon_social" id="razon_social">
  <label for="fecha_emision">Fecha Emision</label>
  <input type="date" class="envioBd" name="fecha_emision" id="fecha_emision">
  <label for="fecha_vencimiento">fecha_vencimiento</label>
  <input type="date" class="envioBd" name="fecha_vencimiento" id="fecha_vencimiento">
  <span class="tittle">Domicilio</span>
  <label for="direccion">Dirección</label>
  <input type="text" class="dir" name="direccion" id="direccion">
  <label for="colonia">Colonia</label>
  <input type="text" class="dir" name="colonia" id="colonia">
  <label for="ciudad">Ciudad</label>
  <input type="text" class="dir" name="ciudad" id="ciudad">
  <label for="estado">Estado</label>
  <input type="text" class="dir" name="estado" id="estado">
  <label for="cp">Código Postal</label>
  <input type="number" class="dir" name="cp" id="cp">
  <label for="pais">País</label>
  <input type="text" class="dir" name="pais" id="pais">
  <a class="btn-send" id="enviar">Enviar</a>
</section>`,
`<h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
<section class="card form-1">
<span class="tittle">Nueva Fuente</span>
<br>
<label for="isotopo">Isotopo (Forma corta)</label>
<input type="text" name="isotopo" id="isotopo" class="envioBd" placeholder="Ejemplo: Cs-137">
<label for="energia">Energía(s)</label>
<input type="text" name="energia" id="energia" class="envioBd">
<label for="vida_media">Vida media (años)</label>
<input type="text" name="vida_media" id="vida_media" class="envioBd">
<label for="rendiemiento">Rendiemiento</label>
<input type="text" name="rendiemiento" id="rendiemiento" class="envioBd">
<label for="marca">marca</label>
<input type="text" name="marca" id="marca" class="envioBd">
<label for="serie">serie</label>
<input type="text" name="serie" id="serie" class="envioBd">
<label for="actividad_original">Actividad_original en Bq</label>
<input type="number" name="actividad_original" id="actividad_original" class="envioBd">
<label for="unidades">Unidades </label>
<select name="unidades" id="unidades" class="envioBd" >
    <option value="Bq">Bq</option>
    <option value="KBq">KBq</option>
    <option value="MBq">MBq</option>
    <option value="GBq">GBq</option>
</select>
<label for="fecha_cal">Fecha de calibración</label>
<input type="date" name="fecha_cal" id="fecha_cal" class="envioBd">
<a class="btn-send" id="enviar">Enviar</a>
</section>`,
`<h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
<section class="card form-1">
<span class="tittle">Nuevo Equipo</span>
<br>
<label for="marca">Marca</label>
<input type="text" name="marca" id="marca" class="envioBd">
<label for="modelo">Modelo</label>
<input type="text" name="modelo" id="modelo" class="envioBd">
<label for="serie">Serie</label>
<input type="text" name="serie" id="serie" class="envioBd">
<label for="tipo">Tipo</label>
<select name="tipo" id="tipo" class="envioBd">
    <option value="Monocanal">Monocanal</option>
    <option value="Multicanal">Multicanal</option>
</select>
<label for="resolucion">Resolucion (V)</label>
<input type="text" name="resolucion" id="resolucion" class="envioBd">
<a class="btn-send" id="enviar">Enviar</a>
</section>`,
`<h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
<section class="card form-1">
<span class="tittle">Nuevo Detector</span>
<br>
<label for="marca">Marca</label>
<input type="text" name="marca" id="marca" class="envioBd">
<label for="modelo">Modelo</label>
<input type="text" name="modelo" id="modelo" class="envioBd">
<label for="serie">Serie</label>
<input type="text" name="serie" id="serie" class="envioBd">
<label for="hv">HV</label>
<input type="text" name="hv" id="hv" class="envioBd">
<label for="tipo">Tipo</label>
<select name="tipo" id="tipo" class="envioBd">
    <option value="Centelleo">Centelleo</option>
    <option value="Gaiger Muller">Gaiger Muller</option>
    <option value="Proporcional">Proporcional</option>
    <option value="Gas sin ventana">Gas sin ventana</option>
</select>

<a class="btn-send" id="enviar">Enviar</a>
</section>`,
`<h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
<section class="card form-1">
    <span class="tittle">Nuevo Personal</span>
    <br>
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" class="envioBd">
    <label for="nivel">Profesión</label>
    <select name="nivel" id="nivel" class="envioBd">
        <option value="Ing.">Ingeniero(a)</option>
        <option value="Tec.">Técnico(a)</option>
        <option value="Lic.">Licenciado(a)</option>
        <option value="M. en C.">Maestria en ciencias</option>
    </select>
    <label for="cargo">Cargo dentro del laboratorio (P.F.)</label>
    <select name="cargo" id="cargo" class="envioBd">
        <option value="E.S.R.">E.S.R.</option>
        <option value="Auxiliar de E.S.R.">Auxiliar de E.S.R.</option>
        <option value="P.O.E.">P.O.E.</option>
    </select>
    <a class="btn-send" id="enviar">Enviar</a>
</section>`
]
// funcion para crear ID aleatorios



//Siempre declararemos una variable en cada modulo con su respectivo nombre del mismo elemento,
// en este caso la etiqueta main llamada 'monitor'
const monitorLab= document.getElementById('monitor');
/************************************************************************************************************************
 * FUNCIONES PARA CONSTUIR DOM GENERAL
 *************************************************************************************************************************/
//Funciones generales
function callLabGestion(){
  monitorLab.innerHTML = '';
  monitorLab.innerHTML=`
  <section class="container">
  <article class="card card-cal-info calibracion" >
          <span class="material-symbols-outlined calibracion"><img src="./assets/icons/monitor 3.svg" alt="IconoMonitor2"></span>
          <h3 class="calibracion">Calibración</h3>
  </article>
  <article class="card card-cal-info pruebas_fuga">
      <span class="material-symbols-outlined pruebas_fuga"><img src="./assets/icons/pf.svg" alt="Icono Prueba de fuga"></span>
      <h3 class="pruebas_fuga">Pruebas de fuga</h3>
  </article>
</section>`;
// Asignamos una función para cada modulo a travez de su clase correpondiente
document.querySelector('.calibracion').onclick = ()=> calibracionDash();
document.querySelector('.pruebas_fuga').onclick = ()=> pruebasFugaMenu();


}
function agregar(tabla,area){
  console.log(`[Agregar Nuevo ${tabla},del area ${area}]`);
  if(area === 'pf'){
    switch (tabla) {
      case 'licencias':
        monitorLab.innerHTML = formulariosPf[0];
        const enviar=document.getElementById('enviar');
        enviar.onclick = ()=> envioBdPf('licencias');
        break;
      case 'fuentes':
        monitorLab.innerHTML = formulariosPf[1];
        const enviar_fuentes=document.getElementById('enviar');
        enviar_fuentes.onclick = ()=> envioBdPf('fuentes');
        break;
      case 'equipos':
        monitorLab.innerHTML = formulariosPf[2];
        const enviar_equipos=document.getElementById('enviar');
        enviar_equipos.onclick = ()=> envioBdPf('equipos');

        break;
      case 'detectores':
        monitorLab.innerHTML =formulariosPf[3];
        const enviar_detectores=document.getElementById('enviar');
        enviar_detectores.onclick = ()=> envioBdPf('detectores');
        break;
      case 'personalPf':
        monitorLab.innerHTML =formulariosPf[4];
        const enviar_personal=document.getElementById('enviar');
        enviar_personal.onclick = ()=> envioBdPf('personalPf');

        break;

      default:
        break;
    }
    document.getElementById('atras').onclick = ()=> pruebasFugaLicencia();

  }else{
    ///Funciones para calibración
  }

}
async function editarElemento(id,tabla,area){
   //traemos la información de la base de datos a travez de fetch
   const labPf = await fetch(API_PF);
   const dataLab = await labPf.json();

  if(area === 'pf'){
    monitorLab.innerHTML=`<h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>`;
    switch(tabla){
      case 'licencias':
        const licencia = dataLab.licencias.lista.find(item => item.id === id);//Esto lo tenemos que traer de la base de datos
        monitorLab.innerHTML+=`
        <section class="card form-1">
          <span class="tittle">Licencia ${licencia.num_lic}</span>
          <br>
          <label for="num_lic">Número Licencia</label>
          <input type="text" class="envioBd" name="num_lic" id="num_lic" value = "${licencia.num_lic}">
          <label for="nombre">Nombre</label>
          <input type="text" class="envioBd" name="nombre" id="nombre" value = "${licencia.nombre}">
          <label for="razon_social">Razón social</label>
          <input type="text" class="envioBd" name="razon_social" id="razon_social" value = "${licencia.razon_social}">
          <label for="fecha_emision">Fecha Emision</label>
          <input type="date" class="envioBd" name="fecha_emision" id="fecha_emision" value = "${licencia.fecha_emision}">
          <label for="fecha_vencimiento">fecha_vencimiento</label>
          <input type="date" class="envioBd" name="fecha_vencimiento" id="fecha_vencimiento" value = "${licencia.fecha_vencimiento}">
          <span class="tittle">Domicilio</span>
          <label for="direccion">Dirección</label>
          <input type="text" class="dir" name="direccion" id="direccion" value = "${licencia.domicilio.direccion}">
          <label for="colonia">Colonia</label>
          <input type="text" class="dir" name="colonia" id="colonia"value = "${licencia.domicilio.colonia}" >
          <label for="ciudad">Ciudad</label>
          <input type="text" class="dir" name="ciudad" id="ciudad" value = "${licencia.domicilio.ciudad}">
          <label for="estado">Estado</label>
          <input type="text" class="dir" name="estado" id="estado" value = "${licencia.domicilio.estado}">
          <label for="cp">Código Postal</label>
          <input type="number" class="dir" name="cp" id="cp" value = "${licencia.domicilio.cp}">
          <label for="pais">País</label>
          <input type="text" class="dir" name="pais" id="pais" value = "${licencia.domicilio.pais}">
          <span class="tittle ">Status</span>
          <select name="status" id="status" class="envioBd">
              <option value="Activo">Activo</option>
              <option value="Baja">Baja</option>
          </select>
          <a class="btn-send" id="guardar">Guardar</a>
        </section>`;
        document.getElementById('guardar').onclick = ()=> actualizarBdPf(id,tabla);
        let statusLic=document.getElementById('status').options;
        for (const item of statusLic) {
          if(item.value === licencia.status){
            item.selected = true;
          }
        }
      break;
      case 'fuentes':
        const fuente = dataLab.fuentes.lista.find(item => item.id === id);//Esto lo tenemos que traer de la base de datos
        monitorLab.innerHTML+=`
        <section class="card form-1">
            <span class="tittle">Fuente ${fuente.isotopo} serie ${fuente.serie}</span>
            <br>
            <label for="isotopo">Isotopo</label>
            <select name="isotopo" id="isotopo" class="envioBd">
                <option value="Cs-137">Cs-137</option>
                <option value="Co-60">Co-60</option>
                <option value="Sr-90">Sr-90</option>
                <option value="Ba-133">Ba-133</option>
                <option value="Am-241">Am-241</option>
                <option value="H-3">H-3</option>
            </select>
            <label for="energia">Energía(s)</label>
            <input type="text" name="energia" id="energia" value="${fuente.energia}" class="envioBd">
            <label for="marca">marca</label>
            <input type="text" name="marca" id="marca" value="${fuente.marca}" class="envioBd">
            <label for="serie">serie</label>
            <input type="text" name="serie" id="serie" value="${fuente.serie}" class="envioBd">
            <label for="actividad_original">Actividad_original</label>
            <input type="number" name="actividad_original" id="actividad_original" value="${fuente.actividad_original}" class="envioBd">
            <label for="unidades">Unidades</label>
            <select name="unidades" id="unidades" value="${fuente.unidades}" class="envioBd" >
                <option value="Ci">Ci</option>
                <option value="mCi">mCi</option>
                <option value="µCi">µCi</option>
                <option value="Bq">Bq</option>
                <option value="KBq">KBq</option>
                <option value="MBq">MBq</option>
                <option value="GBq">GBq</option>
            </select>
            <label for="fecha_cal">fecha_cal</label>
            <input type="date" name="fecha_cal" id="fecha_cal" value="${fuente.fecha_cal}" class="envioBd">
            <span class="tittle ">Status</span>
            <select name="status" id="status" class="envioBd">
              <option value="Activo">Activo</option>
              <option value="Baja">Baja</option>
          </select>
            <a class="btn-send" id="guardar">Guardar</a>
        </section>
        `;
        //Para devolver la seleccion de los select:
        document.getElementById('guardar').onclick = ()=> actualizarBdPf(id,tabla);
        let isotopos=document.getElementById('isotopo').options;
        for (const item of isotopos) {
          if(item.value === fuente.isotopo){
            item.selected = true;
          }
        }

        let unidades=document.getElementById('unidades').options;
        for (const item of unidades) {
          if(item.value === fuente.unidades){
            item.selected = true;
          }
        }
        let status=document.getElementById('status').options;
        for (const item of status) {
          if(item.value === fuente.status){
            item.selected = true;
          }
        }
      break;
      case 'equipos':
        const equipo = dataLab.equipos.lista.find(item => item.id === id);//Esto lo tenemos que traer de la base de datos
        monitorLab.innerHTML+=`
        <section class="card form-1">
            <span class="tittle">Equipo ${equipo.marca} modelo ${equipo.modelo}</span>
            <br>
            <label for="marca">Marca</label>
            <input type="text" name="marca" id="marca" value="${equipo.marca}" class="envioBd">
            <label for="modelo">Modelo</label>
            <input type="text" name="modelo" id="modelo" value="${equipo.modelo}" class="envioBd">
            <label for="serie">serie</label>
            <input type="text" name="serie" id="serie" value="${equipo.serie}" class="envioBd">
            <label for="tipo">Tipo</label>
            <select name="tipo" id="tipo" class="envioBd">
                <option value="Monocanal">Monocanal</option>
                <option value="Multicanal">Multicanal</option>
            </select>
            <span class="tittle ">Status</span>
            <select name="status" id="status" class="envioBd">
              <option value="Activo">Activo</option>
              <option value="Baja">Baja</option>
          </select>

            <a class="btn-send" id="guardar">Guardar</a>
        </section>
        `;
        //Para devolver la seleccion de los select:
        document.getElementById('guardar').onclick = ()=> actualizarBdPf(id,tabla);
        let stat=document.getElementById('status').options;
        for (const item of stat) {
          if(item.value === equipo.status){
            item.selected = true;
          }
        }
        let tipo=document.getElementById('tipo').options;
        for (const item of tipo) {
          if(item.value === equipo.status){
            item.selected = true;
          }
        }
        break;
      case 'detectores':
          const detector = dataLab.detectores.lista.find(item => item.id === id);//Esto lo tenemos que traer de la base de datos
          monitorLab.innerHTML+=`
          <section class="card form-1">
            <span class="tittle">Detector ${detector.marca} modelo ${detector.modelo} serie ${detector.serie}</span>
            <br>
            <label for="marca">Marca</label>
            <input type="text" name="marca" id="marca" class="envioBd" value="${detector.marca}">
            <label for="modelo">Modelo</label>
            <input type="text" name="modelo" id="modelo" class="envioBd" value="${detector.modelo}">
            <label for="serie">Serie</label>
            <input type="text" name="serie" id="serie" class="envioBd" value="${detector.serie}">
            <label for="hv">HV</label>
            <input type="text" name="hv" id="hv" class="envioBd" value="${detector.hv}">
            <label for="tipo">Tipo</label>
            <select name="tipo" id="tipo" class="envioBd">
                <option value="Centelleo">Centelleo</option>
                <option value="Gaiger Muller">Gaiger Muller</option>
                <option value="Proporcional">Proporcional</option>
                <option value="Gas sin ventana">Gas sin ventana</option>
            </select>
            <span class="tittle ">Status</span>
            <select name="status" id="status" class="envioBd">
              <option value="Activo">Activo</option>
              <option value="Baja">Baja</option>
            </select>

            <a class="btn-send" id="guardar">Guardar</a>
          </section>
          `;
          //Para devolver la seleccion de los select:
          document.getElementById('guardar').onclick = ()=> actualizarBdPf(id,tabla);
          let statatus_det=document.getElementById('status').options;
          for (const item of statatus_det) {
            if(item.value === detector.status){
              item.selected = true;
            }
          }
          let tipo_det=document.getElementById('tipo').options;
          for (const item of tipo_det) {
            if(item.value === detector.tipo){
              item.selected = true;
            }
          }
          break;
      case 'personalPf':
        const personal = dataLab.personalPf.lista.find(item => item.id === id);//Esto lo tenemos que traer de la base de datos
        monitorLab.innerHTML+=`
        <section class="card form-1">
            <span class="tittle">${personal.cargo}</span>
            <br>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" class="envioBd" value="${personal.nombre}">
            <label for="nivel">Profesión</label>
            <select name="nivel" id="nivel" class="envioBd">
                <option value="Ing.">Ingeniero(a)</option>
                <option value="Tec.">Técnico(a)</option>
                <option value="Lic.">Licenciado(a)</option>
                <option value="M. en C.">Maestria en ciencias</option>
            </select>
            <label for="cargo">Cargo dentro del laboratorio (P.F.)</label>
            <select name="cargo" id="cargo" class="envioBd">
                <option value="E.S.R.">E.S.R.</option>
                <option value="Auxiliar de E.S.R.">Auxiliar de E.S.R.</option>
                <option value="P.O.E.">P.O.E.</option>
            </select>
            <span class="tittle ">Status</span>
            <select name="status" id="status" class="envioBd">
              <option value="Activo">Activo</option>
              <option value="Baja">Baja</option>
            </select>

            <a class="btn-send" id="guardar">Guardar</a>
          </section>
        </section>
        `;
        //Para devolver la seleccion de los select:
        document.getElementById('guardar').onclick = ()=> actualizarBdPf(id,tabla);
        let statatus_personal=document.getElementById('status').options;
        for (const item of statatus_personal) {
          if(item.value === personal.status){
            item.selected = true;
          }
        }
        let nivel_personal=document.getElementById('nivel').options;
        for (const item of nivel_personal) {
          if(item.value === personal.nivel){
            item.selected = true;
          }
        }
        let cargo_personal=document.getElementById('cargo').options;
        for (const item of cargo_personal) {
          if(item.value === personal.cargo){
            item.selected = true;
          }
        }
        break;

        default:
        break;
    }
    document.getElementById('atras').onclick = ()=> pruebasFugaLicencia();
  }else{
    //Elementos de editar para Calibracion
  }
}
async function deleteElemento(id,tabla,area){
  const objson ={}
  if(area === 'pf'){
    objson['collection']=tabla;
    objson['id']=id;

  const res = await fetch(API_PF, {
    method: 'DELETE',
     headers: {
        'Content-Type': 'application/json',
     },
    body: JSON.stringify(objson)
  });

const data = await res.json();
console.log(data);
setTimeout(() => {
  pruebasFugaLicencia();
}, 2000);


  }
}
/***************************************************************************************************
 * FUNCIONES PARA ENVIO A BASE DE DATOS
 ***************************************************************************************************/
const API_PF ='http://localhost:3000/api/v1/pfLaboratorio';
async function envioBdPf(tabla){

  let objson ={};
  const objdata={};
  switch (tabla) {
    case 'licencias':

      const objdir = {};
      document.querySelectorAll('.dir').forEach(item =>{
        objdir[item.id]=item.value;
      });
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      objdata['domicilio']={...objdir};
      objdata['status']='Activo';
      objdata['id']=generateRandomString(15);

      laboratorioPf.licencias.push(objdata);

      break;
    case 'fuentes':
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      objdata['status']='Activo';
      objdata['id']=generateRandomString(15);
      laboratorioPf.fuentes.push(objdata);
      break;
    case 'equipos':
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      objdata['status']='Activo';
      objdata['id']=generateRandomString(15);
      laboratorioPf.equipos.push(objdata);
      break;
    case 'detectores':
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      objdata['status']='Activo';
      objdata['id']=generateRandomString(15);
      console.log(objdata)
      laboratorioPf.detectores.push(objdata);
      break;
    case 'personalPf':
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      objdata['status']='Activo';
      objdata['id']=generateRandomString(15);
      console.log(objdata)
      laboratorioPf.personalPf.push(objdata);
      break;

    default:
      break;
  }


  objson['collection']=tabla;
  objson['lista']=objdata;
  console.log(objson);


  const res = await fetch(API_PF, {
    method: 'POST',
     headers: {
        'Content-Type': 'application/json',
     },
    body: JSON.stringify(objson)
});

const data = await res.json();
console.log(data);
  setTimeout(() => {
    pruebasFugaLicencia();

  }, 2000);

}
async function actualizarBdPf(id, tabla){
  //Declaramos el objeto que vamos a enviar
  const objson={}
  //Objeto de ayuda para almacenar todos los cambios
  const objdata={}
  let index;
  switch (tabla) {
    case 'licencias':

      const objdir = {};
      document.querySelectorAll('.dir').forEach(item =>{
        objdir[item.id]=item.value;
      });
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      objdata['domicilio']={...objdir};
      objdata['id']=id;

      console.log(`[ACTUALIZACION]:${objdata}`);
      index= laboratorioPf.licencias.findIndex(item => item.id === id);
      laboratorioPf.licencias[index] = objdata;
      break;
    case 'fuentes':
        document.querySelectorAll('.envioBd').forEach(item =>{
          objdata[item.id]=item.value;
        });
        // objdata['id']=id;
        console.log(`[ACUALIZACION]:${id}`);
        console.log(objdata)
        index= laboratorioPf.fuentes.findIndex(item => item.id === id);
        laboratorioPf.fuentes[index] = {...objdata};
        break;
    case 'equipos':
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      // objdata['id']=id;
      console.log(`[ACUALIZACION]:${id}`);
      console.log(objdata)
      index= laboratorioPf.equipos.findIndex(item => item.id === id);
      laboratorioPf.equipos[index] = {...objdata};
      break;
    case 'detectores':
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      // objdata['id']=id;
      console.log(`[ACUALIZACION]:${id}`);
      console.log(objdata)
      index= laboratorioPf.detectores.findIndex(item => item.id === id);
      laboratorioPf.detectores[index] = {...objdata};
      break;

    case 'personalPf':
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      // objdata['id']=id;
      console.log(`[ACUALIZACION]:${id}`);
      console.log(objdata)
      index= laboratorioPf.personalPf.findIndex(item => item.id === id);
      laboratorioPf.personalPf[index] = {...objdata};
      break;

    default:
      break;
  }

  objson['collection']=tabla;
  objson['id']=id;
  objson['lista']=objdata;
  console.log(objson);
  const res = await fetch(API_PF, {
    method: 'PATCH',
     headers: {
        'Content-Type': 'application/json',
     },
    body: JSON.stringify(objson)
});

const data = await res.json();
console.log(data);
setTimeout(() => {
  pruebasFugaLicencia();
}, 2000);



}
