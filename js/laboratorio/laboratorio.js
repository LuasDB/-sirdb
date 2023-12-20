const formulariosPf = [
  `<section class="card form-1">         
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
`<section class="card form-1">         
<span class="tittle">Nueva Fuente</span>
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
<input type="text" name="energia" id="energia" class="envioBd">
<label for="marca">marca</label>
<input type="text" name="marca" id="marca" class="envioBd">
<label for="serie">serie</label>
<input type="text" name="serie" id="serie" class="envioBd">
<label for="actividad_original">Actividad_original</label>
<input type="number" name="actividad_original" id="actividad_original" class="envioBd">
<label for="unidades">Unidades</label>
<select name="unidades" id="unidades" class="envioBd" >
    <option value="Ci">Ci</option>
    <option value="mCi">mCi</option>
    <option value="µCi">µCi</option>
    <option value="Bq">Bq</option>
    <option value="KBq">KBq</option>
    <option value="MBq">MBq</option>
    <option value="GBq">GBq</option>
</select>
<label for="fecha_cal">fecha_cal</label>
<input type="date" name="fecha_cal" id="fecha_cal" class="envioBd">
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
    
      default:
        break;
    }

  }else{
    ///Funciones para calibración
  }
  
}
function editarElemento(id,tabla,area){
  if(area === 'pf'){
    
    switch(tabla){
      case 'licencia':
        const licencia = laboratorioPf.licencias.find(item => item.id === id);//Esto lo tenemos que traer de la base de datos
        monitorLab.innerHTML=`
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
      break;
      case 'fuente':
        const fuente = laboratorioPf.fuentes.find(item => item.id === id);//Esto lo tenemos que traer de la base de datos
        monitorLab.innerHTML=`
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
      default:
        break;

    }
  }else{
    //Elementos de editar para Calibracion
  }
}
function deleteElemento(id,tabla){
  console.log(`[ELIMINAR ${tabla}]:${id}`);
}
/***************************************************************************************************
 * FUNCIONES PARA ENVIO A BASE DE DATOS
 ***************************************************************************************************/
function envioBdPf(tabla){
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
  
    default:
      break;
  }
  pruebasFugaLicencia();
  
}
function actualizarBdPf(id, tabla){
  const objdata={}
  let index;
  switch (tabla) {
    case 'licencia':
      
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
    case 'fuente':
        document.querySelectorAll('.envioBd').forEach(item =>{
          objdata[item.id]=item.value;
        });
        // objdata['id']=id;
        console.log(`[ACUALIZACION]:${id}`);
        console.log(objdata)
        index= laboratorioPf.fuentes.findIndex(item => item.id === id);
        laboratorioPf.fuentes[index] = {...objdata};
        break;
    
    default:
      break;
  }
  
  pruebasFugaLicencia();


}