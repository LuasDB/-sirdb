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
        let enviar=document.getElementById('enviar');
        enviar.onclick = ()=> envioBdPf('licencias');
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
    const licencia = laboratorioPf.licencias.find(item => item.id === id);
    console.log(`[LICENCIA ${id}]:`);
    console.log(licencia);
    switch(tabla){
      case 'licencia':
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

        document.getElementById('guardar').onclick = ()=> actualizarBdPf(id,tabla)

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
/************************************************************************************************************************
 * FUNCIONES PARA ENVIO A BASE DE DATOS
 *************************************************************************************************************************/
function envioBdPf(tabla){
  switch (tabla) {
    case 'licencias':
      const objdata={}
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
  
    default:
      break;
  }
  pruebasFugaLicencia();
  
}
function actualizarBdPf(id, tabla){
  switch (tabla) {
    case 'licencia':
      const objdata={}
      const objdir = {};
      document.querySelectorAll('.dir').forEach(item =>{
        objdir[item.id]=item.value;
      });
      document.querySelectorAll('.envioBd').forEach(item =>{
        objdata[item.id]=item.value;
      });
      objdata['domicilio']={...objdir};
      console.log(`[ACTUALIZACION]:${objdata}`);
      const index= laboratorioPf.licencias.findIndex(item => item.id === id);
      laboratorioPf.licencias[index] = objdata;
      break;
  
    default:
      break;
  }
  
  pruebasFugaLicencia();


}







