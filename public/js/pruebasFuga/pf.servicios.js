/************************************************************************************************************************
 * ATAJOS
 *************************************************************************************************************************/
const $ =(element)=>document.querySelector(element);
const $a =(element)=>document.querySelectorAll(element);
const n =(element)=>document.getElementById(element);



window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

/************************************************************************************************************************
* VARIABLE MONITOR
*************************************************************************************************************************/
const monitorPfServ = document.getElementById('monitor');
/************************************************************************************************************************
 * Formularios para servicio de Pruebas de fuga
 * [0]=Formulario para registro de nuevo servicio
 * [1]=Formulario para registro de nuevo cliente
 *************************************************************************************************************************/
const formulariosPfServ = [`
<datalist id="lista_empresas">

</datalist>
<h3 class="tittle" > <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
<section class="card form-1">
  <span class="tittle">Cliente </span>
  <label for="cliente2">Cliente o empresa</label>
  <input list="lista_empresas" id="id_cliente" name="cliente2" autocomplete="off">
  <button id="buscar_cliente"> Buscar </button>
</section>
<div class="hiden" id="contenido_form">

<section class="card form-1">
  <span class="tittle">Solicitud de Análisis de Pruebas de Fuga</span>
  <label for="os">Orden de Servicio</label>
  <input type="text" id="os" name="os">
  <span class="tittle">Datos del Permisionario</span>
  <label for="razon_social">Razón Social</label>
  <input type="text" id="razon_social" name="razon_social"  class="envioBdPermisionario">
  <label for="licencia">Número de licencia</label>
  <input type="text" id="licencia" name="licencia"  class="envioBdPermisionario">
  <label for="fecha_vencimiento">Fecha de vencimiento de licencia</label>
  <input type="date" id="fecha_vencimiento" name="fecha_vencimiento"  class="envioBdPermisionario">
  <span class="tittle">Domicilio del permisionario</span>
  <label for="calle">Calle y número</label>
  <input type="text" id="calle" name="calle"  class="envioDir">
  <label for="colonia">Colonia</label>
  <input type="text" id="colonia" name="colonia"  class="envioDir">
  <label for="ciudad">Ciudad</label>
  <input type="text" id="ciudad" name="ciudad"  class="envioDir">
  <label for="estado">Estado</label>
  <input type="text" id="estado" name="estado"  class="envioDir">
  <label for="cp">C.P.</label>
  <input type="text" id="cp" name="cp"  class="envioDir">
  <label for="pais">País</label>
  <input type="text" id="pais" name="pais"  class="envioDir" value="México">
  <span class="tittle">Datos del Encargado de Seguridad Radiologíca</span>
  <label for="nombre">Nombre</label>
  <input type="text" name="nombre" id="nombre" class="envioBdEsr">
  <label for="nivel">Profesión</label>
  <select name="nivel" id="nivel" class="envioBdEsr">
    <option value="Ing.">Ingeniero(a)</option>
    <option value="Tec.">Técnico(a)</option>
    <option value="Lic.">Licenciado(a)</option>
    <option value="M. en C.">Maestria en ciencias</option>
    <option value="C.">Ciudadano</option>
  </select>
  <label for="correo">Email</label>
  <input type="email" id="correo" name="correo"  class="envioBdEsr">
  <label for="telefono">Teléfono</label>
  <input type="tel" id="telefono" name="telefono"  class="envioBdEsr">
  <label for="fax">Fax</label>
  <input type="text" id="fax" name="fax"  class="envioBdEsr" value="N/D">
  <span class="tittle">Frotis</span>
  <a class="btn-new" id="nuevo_fortis"><span class="material-symbols-outlined">add_circle</span>Nuevo frotis</a>
  <div id="lista" class="scroll-horizontal">
      <table>
          <thead>
              <th>Isótopo</th>
              <th>No.Serie</th>
              <th>Marca</th>
              <th>Act.Original</th>
              <th>Metodo Prueba</th>
              <th>Fecha Frotis</th>
              <th>Eliminar</th>
          </thead>
          <tbody id="frotis_tabla">

          </tbody>
      </table>
  </div>

  <div id="frotis_form" class="recuadro form-1">


  </div>
  </section>
  <br><br>
  <section class="form-1 card">
      <a class="btn-send" id="enviar_registro"><span class="material-symbols-outlined">send</span>Enviar registro</a>
  </section>
</div>
`,`
<h3 class="tittle" > <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
      <section class="card form-1">
        <p>Para llenar el siguiente formulario es importante que solicites al cliente un correo que servira para poder acceder a su cuenta</p>
        <p>* La contraseña se enviara automaticamente al correo que registres</p>
        <p>* El nombre que registres se guardará para seleccionarlo cada que registres un nuevo servicio </p>
        <span class="tittle">Nuevo Cliente</span>
        <label for="nombre">Nombre cliente</label>
        <input type="text" id="nombre"  autocomplete="off" class="envioDb" required>
        <span class="tittle">Información de contacto</span>
        <label for="nombre_contacto">Nombre contacto</label>
        <input type="text" id="nombre_contacto"  autocomplete="off" class="envioDb" required>
        <label for="correo_cuenta">Correo asociado a la cuenta</label>
        <input type="email" id="correo_cuenta"  autocomplete="off" class="envioDb" required>
        <button class="btn-send" id="enviar_cliente">Registrar</button>
      </section>`];
const hoy = new Date();
//Variable para agregar los fortis que se daran de alta
let listaFrotis = [];
let informesNum = [];
/************************************************************************************************************************
 *VARIABLES PARA LA API DE SERVICIOS PF
 *************************************************************************************************************************/
//  const SERVER =`http://localhost:3000`//pruevas locales
 const SERVER =`https://sirdb.onrender.com`//pruevas locales

 const API_SERVICIOS_PF = `${SERVER}/api/v1/pruebasFugaServices`;
 const API_CLIENTES = `${SERVER}/api/v1/clientes`;

/************************************************************************************************************************
 * FUNCIONES PARA CONSTUIR DOM EN PF SERVICIOS
 *************************************************************************************************************************/
// Variable para llevar el control de la página actual
let paginaActual = 1;
//Funcion para em menu de servicios
function callMenuPfServicios(){
  monitorPfServ.innerHTML=`
  <section class="container">
  <article class="card card-cal-info solicitudes" >
          <span class="material-symbols-outlined solicitudes"><img src="./assets/icons/notebook.svg" alt="IconoMonitor2"></span>
          <h3 class="solicitudes">Solicitudes de P.F.</h3>
  </article>
  <article class="card card-cal-info recepcionPf">
      <span class="material-symbols-outlined recepcionPf"><img src="./assets/icons/frotis.svg" alt="Icono Prueba de fuga"></span>
      <h3 class="recepcionPf">Recepcion de P.F.</h3>
  </article>
  <article class="card card-cal-info pf">
      <span class="material-symbols-outlined pf"><img src="./assets/icons/pf.svg" alt="Icono Prueba de fuga"></span>
      <h3 class="pf">P.F. para realizar</h3>
  </article>
</section>`;
document.querySelector('.solicitudes').onclick = () => callSolicitudesPf();
document.querySelector('.recepcionPf').onclick = () => callRecepcionPf();
document.querySelector('.pf').onclick = () => callPruebasFuga();



}
//Funciones para registro de nuevo servicio
async function callNuevoServicioPf(){
  monitorPfServ.innerHTML = formulariosPfServ[0];
  //Se debe mandar a llamar el listado de clientes a la BD
  const resApi = await fetch(API_CLIENTES);
  const res = await resApi.json();
  //Llenamos los dataList de clientes
  const datalist = document.getElementById('lista_empresas');
  res.clientes.forEach(cliente =>{
    const option = document.createElement('option');
    option.value = cliente.nombre;
    option.id = cliente.id_cliente;
    datalist.appendChild(option);
  });


  //Asignamos las funciones a los botones
  document.getElementById('atras').onclick = ()=> callPruebasFuga();
  document.getElementById('nuevo_fortis').onclick = ()=> callNuevoFortis();
  document.getElementById('enviar_registro').onclick = ()=> sendRegistroPf();
  document.getElementById('buscar_cliente').onclick = ()=> searchCustomer();

  listaFrotis = [];
}
// función para buscar cliente
function searchCustomer(){
  const cliente = document.getElementById('id_cliente').value;
  const lista_empresas =  document.getElementById('lista_empresas');
  const id_cliente = lista_empresas.querySelector(`option[value="${cliente}"]`);
  const contenido_form = document.getElementById('contenido_form');
  if(id_cliente){
    contenido_form.classList.remove('hiden')
  }else{
    Swal.fire({
      title: "Este cliente no se encuentra",
      text: "¿Deseas agregar a un cliente nuevo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No,espera",
      confirmButtonText: "Si"
    }).then(async(result) => {
      if (result.isConfirmed) {
        callNewCustomer();
      }
    }).catch(error=> console.log(error));
  }

}
//Funcion para registro de nuevo cliente:
function callNewCustomer(){
  monitorPfServ.innerHTML=formulariosPfServ[1];
  document.getElementById('atras').onclick = ()=> callNuevoServicioPf();
  document.getElementById('enviar_cliente').onclick = ()=> sendNuevoCliente();

}
//fUNCION PARA DAR DE ALTA EL NUEVO CLIENTE EN LA BASE DE DATOS
async function sendNuevoCliente(){
   // funcion para preguntar al usuario si la informacion es correcta
   Swal.fire({
    title: "Alta en base de datos",
    text: "Revisaste que la información sea correcta?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "No,espera",
    confirmButtonText: "Si,claro"
  })
  .then(async(result) => {
    if (result.isConfirmed) {
      const data = document.querySelectorAll('.envioDb');
      const obj = {}
      data.forEach(element =>{
        element.id === 'correo_cuenta'
        ?obj[element.id]=element.value.toLowerCase()
        :obj[element.id]=element.value.toUpperCase()
      });
      //de qui se envía a Base de datos
      const envio = await fetch(API_CLIENTES,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
      })
      const respuesta = await envio.json();
      console.log(respuesta);
      if(respuesta.id){
        callNuevoServicioPf();
      }
    }
  });

}
function agregarFrotis(){
  let datos_frotis=  document.querySelectorAll('.nvoFrotis');
   console.log(listaFrotis);
   let objFrotis={
       certificado:{},
       status:'Creado'
   }

   datos_frotis.forEach(frotis =>{
       objFrotis[frotis.id]=frotis.value;
   });
   objFrotis['id']=generateRandomString(10);
   listaFrotis.push(objFrotis);
   construirListaFrotis();


}
function eliminarFrotis(i){
  console.log('[ELIMINAR]:',i);
  const index = listaFrotis.findIndex(item => item.id === i );
  console.log('[INDEX]:',index);
  if(index != -1){
      alert(`Deseas eliminar el frotis ${listaFrotis[index].serie}?`)
      listaFrotis.splice(index,1);
  }
  construirListaFrotis();

}
function callNuevoFortis(){
   document.getElementById('frotis_form').innerHTML=`<span class="letra-color">Datos del frotis</span>
   <br>
   <label for="isotopo">Isotopo</label>
   <select name="isotopo" id="isotopo" class="nvoFrotis">
       <option value="Cs-137">Cs-137</option>
       <option value="Co-60">Co-60</option>
       <option value="Sr-90">Sr-90</option>
       <option value="Ba-133">Ba-133</option>
       <option value="Am-241">Am-241</option>
       <option value="H-3">H-3</option>
   </select>
   <label for="serie">serie</label>
   <input type="text" name="serie" id="serie" class="nvoFrotis">
   <label for="marca">marca</label>
   <input type="text" name="marca" id="marca" class="nvoFrotis">
   <label for="actividad_original">Actividad_original</label>
   <input type="number" name="actividad_original" id="actividad_original" class="nvoFrotis">
   <label for="unidades">Unidades</label>
   <select name="unidades" id="unidades" class="nvoFrotis" >
       <option value="Ci">Ci</option>
       <option value="mCi">mCi</option>
       <option value="µCi">µCi</option>
       <option value="Bq">Bq</option>
       <option value="KBq">KBq</option>
       <option value="MBq">MBq</option>
       <option value="GBq">GBq</option>
   </select>
   <label for="metodo">Método</label>
   <select name="metodo" id="metodo" class="nvoFrotis" >
       <option value="Vía humeda (Sobre una superficie equivalente)">Superficie equivalente</option>
       <option value="Vía humeda (Sobre la fuente)">Sobre la fuente</option>
   </select>
   <label for="fecha_frotis">Fecha de toma</label>
   <input type="date" name="fecha_frotis" id="fecha_frotis" class="nvoFrotis">
   <a class="btn-send" id="agregar">Agregar</a>`;
   document.getElementById('agregar').onclick = () => agregarFrotis();
}
function sendRegistroPf(){
  // funcion para preguntar al usuario si la informacion es correcta
  Swal.fire({
    title: "Alta en base de datos",
    text: "Revisaste que la información sea correcta?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "No,espera",
    confirmButtonText: "Si,claro"
  })
  .then(async(result) => {
    if (result.isConfirmed) {
      //Creamos un objeto que contendra todos nuestros datos
      const objData = {
      permisionario:{
        domicilio:{},
        esr:{}
      }
    }
    //Agregamos el ID del cliente
    const clienteInput = document.getElementById('id_cliente').value;
    const lista_empresas =  document.getElementById('lista_empresas');
    const cliente = lista_empresas.querySelector(`option[value="${clienteInput}"]`);
    console.log('[ID CLIENTE]',cliente.id);

  //Creamos un id a este objeto que se esta construyendo
  objData['id']=generateRandomString(15);
  objData['clienteId']=cliente.id;
  //Agregamos la O.S.
  objData['os']=document.getElementById('os').value;
  let dataPermisionario = document.querySelectorAll('.envioBdPermisionario');
  let dataDomicilio = document.querySelectorAll('.envioDir');
  let dataEsr= document.querySelectorAll('.envioBdEsr');
  dataEsr.forEach(data =>{
      objData['permisionario']['esr'][data.id]=data.value;
  });
  dataDomicilio.forEach(data =>{
      objData['permisionario']['domicilio'][data.id]=data.value;
  });
  dataPermisionario.forEach(data =>{
      objData['permisionario'][data.id]=data.value;
  });
  objData['frotis']=[...listaFrotis];
  objData['año']=hoy.getFullYear();
  serviciosPf.push(objData);
  console.log(objData);
  console.log(serviciosPf);

  const envio  = await fetch(API_SERVICIOS_PF,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(objData)
  });
  const res = await envio.json();
  console.log(res);

  callSolicitudesPf();
    }
  })
  .catch(error => console.log(error));
}
function construirListaFrotis(){
    document.getElementById('frotis_form').innerHTML='';
    let tabla = document.getElementById('frotis_tabla');
    tabla.innerHTML='';
    let index =0;
    listaFrotis.forEach(froti=>{
        console.log(index);
        let fila = document.createElement('tr');

        fila.innerHTML=`
        <td>${froti.isotopo}</td>
        <td>${froti.serie}</td>
        <td>${froti.marca}</td>
        <td>${froti.actividad_original} ${froti.unidades}</td>
        <td>${froti.metodo}</td>
        <td>${froti.fecha_frotis}</td>
        <td><img src="./assets/icons/eliminar.svg" id="delete_${froti.id}"></img></td>`;
        tabla.appendChild(fila);
        document.getElementById(`delete_${froti.id}`).onclick = ()=> eliminarFrotis(froti.id);
    });

}
//function para llamar formulario de recepción
async function callRecepcionPf(){
  const url = `${API_SERVICIOS_PF}/all/${hoy.getFullYear()}`
  console.log(url);
  const solicitudesCreadas = await fetch(url);
  const res = await solicitudesCreadas.json();
  console.log(res);
  const arrayServicios = Object.keys(res.respuesta).map((key)=>{
    let obj ={}
    obj['id_servicio']=key;
    obj['data']=res.respuesta[key]
    return obj;
  });
  console.log(arrayServicios);
  monitorPfServ.innerHTML=`
    <h3 class="tittle" > <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
    <span class="tittle">Recepción de frotis</span>
    <section class="card scroll-horizontal">
        <span class="tittle">Solicitudes de Pruebas de Fuga</span>
        <table>
            <thead>
                <th>Empresa</th>
                <th>O.S.</th>
                <th>Isótopo</th>
                <th>Fecha frotis</th>
                <th>Estatus</th>
                <th>Cantidad</th>
                <th>Recepción</th>
            </thead>
            <tbody id="solicitudes">

            </tbody>
        </table>
        <br>
    </section>
  `;
  document.getElementById('atras').onclick = ()=> callMenuPfServicios();
  //Usamos Variable para cada tabla que exista
  const solicitudes = document.getElementById('solicitudes');
  //Construimos cada fila de la tabla
  let conteo={}
  let clave='';
  arrayServicios.forEach(({id_servicio,data}) => {
    const { frotis,permisionario,os } = data;
    conteo = {};
    clave='';
    frotis.forEach(({ isotopo, fecha_frotis,status,id }) => {
      if(status==='Creado'){
        clave = `${id_servicio},${isotopo},${fecha_frotis}`;
        // Contabilizar isotopos por cada combinación de fechas
        if (!conteo[clave]) {
          conteo[clave] = { total: 0, isotopos: {} };
        }
        conteo[clave].total += 1;
        if (!conteo[clave].isotopos[isotopo]) {
          conteo[clave].isotopos[isotopo] = 0;
        }
        conteo[clave].isotopos[isotopo] += 1;
      }
    });
    console.log('[CONTEO]:',conteo)
    for (const clave in conteo) {
      if (conteo.hasOwnProperty(clave)) {
        const { total, isotopos } = conteo[clave];
        const [id_servicio,isotopo,fechaFrotis] = clave.split(',');
        const fila = document.createElement('tr');
        fila.innerHTML=`
        <td>${permisionario.razon_social}</td>
        <td>${os}</td>
        <td>${isotopo}</td>
        <td>${fechaFrotis}</td>
        <td>Creado</td>
        <td>${total}</td>
        <td id="${clave}"><span class="material-symbols-outlined">
        task
        </span></td>
        `;
        solicitudes.appendChild(fila);
        document.getElementById(`${clave}`).onclick = ()=> recepcionFrotisPf(clave);
      }
    }
  });
}
//Creamos la tabla para la recepcion de frotis
async function recepcionFrotisPf(clave){
console.log('[CLAVE INICIO]',clave);
const url = `${API_SERVICIOS_PF}/all/${hoy.getFullYear()}`
  console.log(url);
  const solicitudesCreadas = await fetch(url);
  const res = await solicitudesCreadas.json();
  console.log(res);
  const arrayServicios = Object.keys(res.respuesta).map((key)=>{
    let obj ={}
    obj['id_servicio']=key;
    obj['data']=res.respuesta[key]
    return obj;
  });
  console.log(arrayServicios);
  monitorPfServ.innerHTML=`
  <h3 class="tittle" > <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>

  <div id="lista" class="scroll-horizontal">
  <p>${clave}</p>
    <table>
        <thead>
            <th>Isótopo</th>
            <th>No.Serie</th>
            <th>Marca</th>
            <th>Act.Original</th>
            <th>Metodo Prueba</th>
            <th>Fecha Frotis</th>
            <th>Recibido</th>
        </thead>
        <tbody id="frotis_tabla">

        </tbody>
    </table>
</div>`;
document.getElementById('atras').onclick = ()=> callMenuPfServicios();

const tabla_frotis = document.getElementById('frotis_tabla');
const [id_servicio,id,isotopo,fechaFrotis] = clave.split(',');
const permisionario = arrayServicios.find(item => item.id_servicio === id_servicio);
console.log('[PERMISIONARIO]',permisionario);
let id_froti;
permisionario.data.frotis.forEach(froti =>{
  const claveF = `${id_servicio},${froti.isotopo},${froti.fecha_frotis}`;
  const id_froti= clave + `,${froti.id}`;
  if(claveF === clave && froti.status === 'Creado'){
    const lista_nueva = document.createElement('tr');
    lista_nueva.innerHTML+=`
    <td>${froti.isotopo}</td>
    <td>${froti.serie}</td>
    <td>${froti.marca}</td>
    <td>${froti.actividad_original} ${froti.unidades}</td>
    <td>${froti.metodo}</td>
    <td>${froti.fecha_frotis}</td>
    <td id="${id_froti}"><span class="material-symbols-outlined" id="${id_froti}">
    task
    </span></td>
    `;
    tabla_frotis.appendChild(lista_nueva);
    document.getElementById(`${id_froti}`).onclick = ()=> recepcionFroti(`${id_froti}`);
  }
});


}
async function recepcionFroti(clave){

  const [id_servicio,isotopo,fecha_frotis,id_frotis] = clave.split(',')

  // const index = arrayServicios.findIndex(item => item.id === id_servicio);
  // const indexFrotis =  arrayServicios[index].frotis.findIndex(item => item.id === id_froti);
  // arrayServicios[index].frotis[indexFrotis]['fecha_entrega']=fechaCorta();
  // arrayServicios[index].frotis[indexFrotis]['status']='En curso';
  document.getElementById(clave).classList.add('recived');

  //actualización de BD
  const obj ={}
  obj['año']=hoy.getFullYear();
  obj['status']='En curso';
  obj['id_servicio']=id_servicio;
  obj['id_frotis']=id_frotis;
  obj['fecha_entrega']=fechaCorta();

  console.log('[OBJ]:',obj)


  const actualizar = await fetch(API_SERVICIOS_PF,{
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj)
  });
  console.log(await actualizar.json())
}
//fUNCION PARA LLAMAR AL FORMULARIO DE SOLICITUDES DE PF
async function callSolicitudesPf(){
  const url = `${API_SERVICIOS_PF}/all/${hoy.getFullYear()}`
  console.log(url);
  const solicitudesCreadas = await fetch(url);
  const res = await solicitudesCreadas.json();
  console.log(res);
  const arrayServicios = Object.keys(res.respuesta).map((key)=>{
    return res.respuesta[key];
  });
  console.log(arrayServicios);
  monitorPfServ.innerHTML=`
  <h3 class="tittle" > <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
  <a class="btn-new" id="nuevo"><span class="material-symbols-outlined">add_circle</span>
          Nueva solicitud
      </a>
          <br>
          <span class="tittle">Solicitudes</span>
          <section class="card scroll-horizontal">
              <span class="tittle">Solicitudes de Pruebas de Fuga</span>
              <table>
                  <thead>
                      <th>Empresa</th>
                      <th>O.S.</th>
                      <th>Isótopo</th>
                      <th>Fecha frotis</th>
                      <th>Estatus</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                  </thead>
                  <tbody id="solicitudes">

                  </tbody>
              </table>
              <br>
          </section>
  `;
  document.getElementById('atras').onclick = ()=> callMenuPfServicios();
  document.getElementById('nuevo').onclick = () => callNuevoServicioPf();
  //Usamos Variable para cada tabla que exista
  const solicitudes = document.getElementById('solicitudes');
  //Construimos cada fila de la tabla
  let conteo={}
  let clave='';
  arrayServicios.forEach(({ frotis,id, permisionario,os}) => {
    conteo = {};
    clave='';
    frotis.forEach(({ isotopo, fecha_frotis,status }) => {
      clave = `${id},${isotopo},${fecha_frotis}`;
      if(status === 'Creado'){
        // Contabilizar isotopos por cada combinación de fechas
        if (!conteo[clave]) {
          conteo[clave] = { total: 0, isotopos: {} };
        }
        conteo[clave].total += 1;
        if (!conteo[clave].isotopos[isotopo]) {
          conteo[clave].isotopos[isotopo] = 0;
        }
        conteo[clave].isotopos[isotopo] += 1;
      }
    });
    console.log(`[${id}]:`);
    console.log(conteo);
    for (const clave in conteo) {
      if (conteo.hasOwnProperty(clave)) {
        const { total, isotopos } = conteo[clave];
        const [id_empresa,isotopo,fechaFrotis] = clave.split(',');
          const fila = document.createElement('tr');
          fila.innerHTML=`
          <td>${permisionario.razon_social}</td>
          <td>${os}</td>
          <td>${isotopo}</td>
          <td>${fechaFrotis}</td>
          <td>Creado</td>
          <td>${total}</td>
          <td id="${clave}"><img src="./assets/icons/eliminar.svg"></img></td>
          `;
          solicitudes.appendChild(fila);
          document.getElementById(`${clave}`).onclick = ()=> eliminarSolicitudPf(clave);
          console.log(`[CONSTRUIDO]:${permisionario.razon_social}:${isotopo}:${total}`);
      }
    }
  });
}

//FUNCION PARA LLAMAR SOLICITUDES DE PF LISTAS PARA REALIZAR
async function callPruebasFuga(){
  const url = `${API_SERVICIOS_PF}/all/${hoy.getFullYear()}`
  console.log(url);
  const solicitudesCreadas = await fetch(url);
  const res = await solicitudesCreadas.json();
  console.log(res);
  const arrayServicios = Object.keys(res.respuesta).map((key)=>{
    let obj ={}
    obj['id_servicio']=key;
    obj['data']=res.respuesta[key]
    return obj;
  });
  console.log(arrayServicios);
    monitorPfServ.innerHTML=`
    <h3 class="tittle" > <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
    <a class="btn-new" id="nuevo"><span class="material-symbols-outlined">add_circle</span>
            Nueva solicitud
        </a>
            <br>
            <span class="tittle">Solicitudes activas</span>
            <section class="card scroll-horizontal">
                <span class="tittle">Solicitudes de Pruebas de Fuga</span>
                <table>
                    <thead>
                        <th>Empresa</th>
                        <th>O.S.</th>
                        <th>Isótopo</th>
                        <th>Fecha frotis</th>
                        <th>Fecha entrega lab.</th>
                        <th>Cantidad</th>
                        <th>Realizar</th>
                        <th>Eliminar</th>
                    </thead>
                    <tbody id="solicitudes">

                    </tbody>
                </table>
                <br>
            </section>
            `;
    document.getElementById('atras').onclick = ()=> callMenuPfServicios();

    document.getElementById('nuevo').onclick = () => callNuevoServicioPf();
    //Usamos Variable para cada tabla que exista
    const solicitudes = document.getElementById('solicitudes');
    //Construimos cada fila de la tabla
    let conteo={}
    let clave='';
    arrayServicios.forEach(({id_servicio,data}) => {
      const { frotis,id, permisionario,os} = data;
      conteo = {};
        clave='';

      frotis.forEach(({ isotopo, fecha_frotis, fecha_entrega,status }) => {
        if(status === 'En curso'){
          clave = `${id_servicio},${isotopo},${fecha_frotis},${fecha_entrega}`;
          // Contabilizar isotopos por cada combinación de fechas
          if (!conteo[clave]) {
            conteo[clave] = { total: 0, isotopos: {} };
          }
          conteo[clave].total += 1;
          if (!conteo[clave].isotopos[isotopo]) {
            conteo[clave].isotopos[isotopo] = 0;
          }
          conteo[clave].isotopos[isotopo] += 1;
        }
      });
      for (const clave in conteo) {
        if (conteo.hasOwnProperty(clave)) {
                const { total, isotopos } = conteo[clave];
                const [id_empresa,isotopo,fechaFrotis, fechaEntrega] = clave.split(',');
                // for (const isotopo in isotopos) {
                        const fila = document.createElement('tr');
                        fila.innerHTML=`
                        <td>${permisionario.razon_social}</td>
                        <td>${os}</td>
                        <td>${isotopo}</td>
                        <td>${fechaFrotis}</td>
                        <td>${fechaEntrega}</td>
                        <td>${total}</td>
                        <td id="${clave}"><img id="${clave}" src="./assets/icons/realizar.svg" ></img></td>
                        <td><img src="./assets/icons/eliminar.svg"></img></td>
                        `;
                        solicitudes.appendChild(fila);
                        document.getElementById(`${clave}`).onclick = ()=> realizarPf(clave);
                        console.log(`[CONSTRUIDO]:${permisionario.razon_social}:${isotopo}:${total}`)

                // }


            }
        }
    });



}
//pendiente arreglar
function eliminarSolicitudPf(clave){

}


//funciones para realización de PF
async function realizarPf(clave){
  const url = `${API_SERVICIOS_PF}/all/${hoy.getFullYear()}`

  const solicitudesCreadas = await fetch(url);
  const res = await solicitudesCreadas.json();

  const arrayServicios = Object.keys(res.respuesta).map((key)=>{
    let obj ={}
    obj['id_servicio']=key;
    obj['data']=res.respuesta[key]
    return obj;
  });


    const [id_servicio,isotopo,fechaFrotis, fechaEntrega] = clave.split(',');
    const permisionario = arrayServicios.find(item => item.id_servicio === id_servicio);

     // construccion de el formulario completo
     monitorPfServ.innerHTML=`
     <datalist id="personal_realizo">

      </datalist>
      <datalist id="personal_autorizo">

      </datalist>
     <section class="card form-1">
         <p><span class="tittle">Datos del permisionario:</span></p>
         <p ><span class="bold-primary-color">Razón social:</span>${permisionario.data.permisionario.razon_social}</p>
         <p><span class="bold-primary-color">Número de licencia:</span> ${permisionario.data.permisionario.licencia} </p>
         <p><span class="bold-primary-color">Fecha de vencimiento:</span>${permisionario.data.permisionario.fecha_vencimiento}</p>
         <p><span class="bold-primary-color">Dirección:</span> ${permisionario.data.permisionario.domicilio.calle},${permisionario.data.permisionario.domicilio.colonia},${permisionario.data.permisionario.domicilio.ciudad},${permisionario.data.permisionario.domicilio.estado},${permisionario.data.permisionario.domicilio.cp},${permisionario.data.permisionario.domicilio.pais}</p>
     </section>
     <section class="card form-1">
         <span class="tittle">Equipo utilizado para la Prueba de Fuga</span>
         <label for="equipo">Equipo</label>
         <select name="equipo" id="equipos" class="envioCerEquipo">
            <option value="" selected></option>
         </select>
         <label for="detector">Detector</label>
         <select name="equipo" id="detectores" class="envioCerEquipo">
            <option value="" selected></option>
         </select>
         <label for="fuente">Fuente de referencia</label>
         <select name="equipo" id="fuente_select">
            <option value="" selected></option>
         </select>
        <input name="equipo" id="fuentes" class="envioCerEquipo hiden">
         <p><span class="bold-primary-color">Actividad Original:</span> <span class="actividad-original">185244 Bq</span></p>
         <p><span class="bold-primary-color">Fecha calibración:</span> <span class="fecha-calibracion">11/12/2015</span></p>
         <p class="bold-primary-color"><span class="letra-color">Actividad Actual:</span><span id="actividad_fechaCal" >152244 Bq</span></p>
         <span class="tittle">Parametros de calibración</span>
         <label for="threshold">T.H. (mV)</label>
         <input type="number" id="threshold" name="threshold" class="envioCerEquipo">
         <label for="hv">H.V. (V)</label>
         <input type="number" id="hv" name="hv" class="envioCerEquipo">
         <label for="gain">Ganancia (X)</label>
         <input type="number" id="ganancia" name="gain" class="envioCerEquipo">
         <label for="gain">Tiempo de conteo (min)</label>
         <input type="number" id="tiempo" name="gain" value="5" class="envioCerEquipo">
     </section>
     <section class="card form-1">
         <span class="tittle">Personal responsable de la prueba de fuga</span>
         <label for="personal_realizo">Realizó la prueba</label>
         <input list="personal_realizo" id="personal_realizo" name="personal_realizo" class="envioCerPersonal">
         <label for="personal_autorizo">Autorización</label>
         <input list="personal_autorizo" id="personal_autorizo" name="personal_autorizo" class="envioCerPersonal">
     </section>
     <section class="card form-1">
         <span class="tittle">Resultados de la prueba para ${isotopo}</span>
         <label for="cont_fuente">Conteos de fuente</label>
         <input type="number" id="cont_fuente" name="cont_fuente" placeholder="Cuentas" class="envioCerPrueba" value="741852963">
         <label for="cont_fondo">Conteos de fondo</label>
         <input type="number" id="cont_fondo" name="cont_fondo" placeholder="Cuentas" class="envioCerPrueba" value="250">
         <span class="tittle">Fuentes</span>
         <div class="form-1" id="lista_frotis">

             </div>
         <a class="btn-send" id="enviar">Enviar Resultados</a>
     </section>

     `;
     document.getElementById('fuente_select').onchange=()=> actualizarTablaFuenteRef();


    const fuentes = document.getElementById('fuente_select');
    const detectores = document.getElementById('detectores');
    const equipos = document.getElementById('equipos');
    const personal_realizo = document.getElementById('personal_realizo');
    const personal_autorizo = document.getElementById('personal_autorizo');
    //Mandar a traer los datos del laboratorio
    const labPf = await fetch(API_PF);
    const dataLab = await labPf.json();

    document.getElementById('enviar').onclick = ()=> envioResultadosPfBd(permisionario,clave,dataLab);

    dataLab.respuesta.fuentes.lista.forEach(fuente =>{
        if(fuente.status === 'Activo'){
            fuentes.innerHTML+=`<option value='${JSON.stringify(fuente)}'>${fuente.isotopo} serie ${fuente.serie}</option>`;
        }
    });
    dataLab.respuesta.detectores.lista.forEach(detector =>{
        if(detector.status === 'Activo'){
            detectores.innerHTML+=`<option value="${detector.id}">${detector.marca} ${detector.modelo},serie ${detector.serie}</option>`;
        }
    });
    dataLab.respuesta.equipos.lista.forEach(equipo =>{
        if(equipo.status === 'Activo'){
            equipos.innerHTML+=`<option value="${equipo.id}">${equipo.marca} ${equipo.modelo}, serie ${equipo.serie}</option>`;
        }
    });
    dataLab.respuesta.personalPf.lista.forEach(persona =>{
        if(persona.status === 'Activo'){
            personal_realizo.innerHTML+=`<option value="${persona.nivel} ${persona.nombre}, ${persona.cargo}">`;
        }
    });
    dataLab.respuesta.personalPf.lista.forEach(persona =>{
        if(persona.status === 'Activo'){
            personal_autorizo.innerHTML+=`<option value="${persona.nivel} ${persona.nombre}, ${persona.cargo}">`;
        }
    });

    const lista = document.getElementById('lista_frotis');
    let x=0;

    permisionario.data.frotis.forEach(froti=>{
        x+=1;
        const claveF = `${id_servicio},${froti.isotopo},${froti.fecha_frotis},${froti.fecha_entrega}`;
        if(claveF === clave){
          if(froti.status != 'Realizado'){

            lista.innerHTML+=`
            <label for="frotis1" class="letra-color">${froti.serie}</label>
            <input type="number" id="${froti.id}" name="frotis1" placeholder="Cuentas" class="envioFrotis" value="${200+x}">
            `;
          }



        }
    });

}
//Envios a Base de datos
async function envioResultadosPfBd(permisionario,clave,dataLab){

  const [ id_servicio,isotopo,fecha_inicio,fecha_entrega ] = clave.split(',');
  const objData ={
      equipo:{},
      personal:{},
      prueba:{},
      licencia:{}
  }
  const objPrueba={}
  const lic_autorizacion = dataLab.respuesta.licencias.lista.find(lic => lic.status === 'Activo');
  objData['licencia']=lic_autorizacion;
  document.querySelectorAll('.envioCerEquipo').forEach(item=>{

      objData['equipo'][item.id]=item.value;

  });
  document.querySelectorAll('.envioCerPersonal').forEach(item=>{
      objData['personal'][item.id]=item.value;
  });
  document.querySelectorAll('.envioCerPrueba').forEach(item=>{
      objPrueba[item.id]=item.value;
  });

  const listadoFrotis=[];
  const arrayInformes=[];
  const apiInformes = `${API_SERVICIOS_PF}/informes/${hoy.getFullYear()}`;
  const contInformes =await fetch(apiInformes);
  const respuesta = await contInformes.json();
  let contadorNum = respuesta.length;

  document.querySelectorAll('.envioFrotis').forEach(async(item)=>{
      //Buscar cada froti en la Base de datos y modificarlo
      const indexFroti = permisionario.data.frotis.findIndex(froti => froti.id === item.id);
      permisionario.data.frotis[indexFroti]['clienteId']=permisionario.data.clienteId;
      permisionario.data.frotis[indexFroti]['status']='Realizado';
      permisionario.data.frotis[indexFroti]['certificado']={...objData};
      permisionario.data.frotis[indexFroti]['certificado']['prueba']={...objPrueba};
      permisionario.data.frotis[indexFroti]['certificado']['prueba']['cont_frotis']=item.value;
      permisionario.data.frotis[indexFroti]['certificado']['fecha_informe']=hoy.toISOString().substr(0, 10);
      permisionario.data.frotis[indexFroti]['certificado']['num_informe']= formatNumber(contadorNum+1);
      contadorNum+=1;
      const nombre_pdf = `${permisionario.data.frotis[indexFroti]['certificado']['num_informe']}_${permisionario.data.permisionario.razon_social}_${permisionario.data.frotis[indexFroti].isotopo.split('/')}_${permisionario.data.frotis[indexFroti].serie}.pdf`
      permisionario.data.frotis[indexFroti]['certificado']['nombre_pdf']= nombre_pdf;

      //Creamos Array para enviar la coleccion de Informes
      const objFroti={}
      objFroti['permisionario']=permisionario.data.permisionario;
      objFroti['froti']=permisionario.data.frotis[indexFroti];
      objFroti['clienteId']=permisionario.data.clienteId;

      listadoFrotis.push(permisionario.data.frotis[indexFroti]);


      arrayInformes.push(objFroti);
  });

  //Creamos un objeto nuevo para actualizar el listado FROTIS de este servicio
  const obj ={}
  obj['año']=hoy.getFullYear();
  obj['id_servicio']=id_servicio;
  obj['frotis']=permisionario.data.frotis;

  const api = `${API_SERVICIOS_PF}/service`;
  const actualizarServicio = await fetch(api,{
    method:'PATCH',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  });
  const res = await actualizarServicio.json();
  //falta mandar a llamar que pasa si no se completa la accion
  console.log(res);
  //Envio a la API los informes para la coleccion de informes
  const apiCrearInformes = `${API_SERVICIOS_PF}/informes`;
  console.log('[CREACION INFORMES0]',arrayInformes);
  const creacionInformes = await fetch(apiCrearInformes,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      año:hoy.getFullYear(),
      informes:arrayInformes
    })
  });
  const resInformes = await creacionInformes.json();
  console.log(resInformes);


  imprimirInformesPf(id_servicio,listadoFrotis,permisionario);
}
//funciones para calculos
function actActualPf(fuente){

    const unidades = {
        Bq:1,
        KBq:1000,
        MBq:1000000,
        GBq:1000000000,
        Ci:1,
        mCi:0.001,
        µCi:0.000001,
        nCi:0.000000001
    }
    const act_original= (fuente.actividad_original)*(unidades[fuente.unidades]);
    console.log('[ACT ORIGINAL]:',act_original);



    let time_cal=new Date(`${fuente.fecha_cal}T00:00:00Z`);
    let time_act = new Date();
    let t = new Date(time_act.getTime() - time_cal.getTime());
    let time=t/(60*60*24*365*1000);
    console.log('[CALIBRACION]:',time_cal);
    console.log('[TIEMPO EN dias]:',t/(60*60*24*1000));

    console.log('[TIEMPO EN AÑOS]:',time);
    console.log('[VIDA MEDIA]:',fuente.vida_media);
    const actividad = Math.round(act_original*Math.exp((-Math.LN2/fuente.vida_media)*time));
    console.log('[ACTIVIDAD ACTUAL]:',actividad);

    return actividad;
}
function calculoHermeticidad(datos){
    let fuente = datos.fuente_ref; //fUENTE SELECCIONADA
    //DATOS DE LOS CONTEOS
    let xm = datos.cont_fuente;
    let xf = datos.cont_fondo;
    let s = Math.sqrt(xf);
    let actividad = actActualPf(datos.fuente_ref);
    let FlujoTeorico = 60*parseFloat(actividad)*parseFloat(fuente.rendimiento);
    let eficiencia = ((xm-xf)/5)/FlujoTeorico;
    let cuentas_bequerel=(xm-xf)/actividad;
    let lld = (4.66*s)/cuentas_bequerel;
    console.log('[Xm]',xm);
    console.log('[Xf]',xf);
    console.log('[Sf]',s);
    console.log('[A]',actividad);
    console.log('[R]',parseFloat(fuente.rendimiento));
    console.log('[Ft]',FlujoTeorico);
    console.log('[E]',eficiencia*100);
    console.log('[CPS/Bq]',cuentas_bequerel);
    console.log('[LLD]',lld);
    const objCalculos = {
        xm,
        xf,
        s,
        actividad,
        FlujoTeorico,
        eficiencia,
        cuentas_bequerel,
        lld
    }
    return objCalculos;





}
function actualizarTablaFuenteRef(){
  const fuente =JSON.parse(n('fuente_select').value);
  const actividada_actual = actActualPf(fuente);
  console.log(fuente)
  $('.actividad-original').innerHTML=`${fuente.actividad_original} Bq`;
  $('.fecha-calibracion').innerHTML=`${fuente.fecha_cal} `;
  n('actividad_fechaCal').innerHTML=`${actividada_actual} Bq`;
  n('fuentes').value=fuente.id
  console.log(n('fuentes').value)

}
// Función para generar el PDF

async function imprimirInformesPf(id, listadoFortis,permisionario){
  console.log('[FORTIS PARA IMPRIMIR]',listadoFortis)
  const labPf = await fetch(API_PF);
  const dataLab = await labPf.json();

  informesNum=[];
  let objInformes={}
  monitorPfServ.innerHTML='<button onclick="generarPDF()">Generar PDF</button>';
  // const listado=['12587sde34', '2587s1w233', '125lo98e34'];
  listadoFortis.forEach(froti => {
    objInformes={};
    const cont_fuente=froti.certificado['prueba'].cont_fuente;
    const cont_fondo=froti.certificado['prueba'].cont_fondo;
    const cont_frotis=froti.certificado['prueba'].cont_frotis;
    const fuente_ref = dataLab.respuesta.fuentes.lista.find(item=>item.id === froti.certificado.equipo.fuentes);

    const resultados = calculoHermeticidad(
    {
    cont_fuente,
    cont_fondo,
    cont_frotis,
    fuente_ref
    });


    let fecha_larga = `${hoy.getDate()} DE ${meses[hoy.getMonth()]} DE ${hoy.getFullYear()}`
    const num_informe =froti.certificado.num_informe;
    let informe_num = `SIR${hoy.getFullYear() % 100}-PF-${num_informe}`;

    froti.certificado['prueba']['resultados']={...resultados,fecha_larga,informe_num}
    //Consulta en BD de los equipos y detectores utilizados para la PF
    const equipoPf = dataLab.respuesta.equipos.lista.find(item=> item.id === froti.certificado.equipo.equipos);
    const detectorPf = dataLab.respuesta.detectores.lista.find(item=> item.id === froti.certificado.equipo.detectores);
    const fuentePf = dataLab.respuesta.fuentes.lista.find(item=> item.id === froti.certificado.equipo.fuentes);
    objInformes['nombre_pdf']=froti.certificado.nombre_pdf;
    objInformes['informe_num']=informe_num;

    informesNum.push(objInformes);
     //construccion del certificado
     monitorPfServ.innerHTML+=`
      <section class="informe-pf" id="${informe_num}">
          <div class="inf-header">
              <img src="./assets/img/encabezado.png" alt="Encabezado">
          </div>
          <div class="content">
              <h3>INFORME DE PRUEBA DE FUGA</h3>
              <div class="table-center-2 border">
                  <div>
                      <h4 class="tittle-table">NO. INFORME</h4>
                      <p>${informe_num}</p>
                  </div>
                  <div>
                      <h4 class="tittle-table">FECHA INFORME</h4>
                      <p>${fecha_larga}</p>
                  </div>
               </div>
              <!-- TABLA DATOS PERMISIONARIO -->
              <div class="table-center border">
                 <h4 class="tittle-table">DATOS DEL PERMISIONARIO DE LA FUENTE SELLADA</h3>
                 <div class="colum-info little-text">
                      <p><span>Razón Social:</span> ${permisionario.data.permisionario.razon_social}</p>
                      <p><span>Domicilio:</span>${permisionario.data.permisionario.domicilio.calle}</p>
                 </div>
                 <div class="row-info little-text">
                      <p><span>Colonia:</span> ${permisionario.data.permisionario.domicilio.colonia}</p>
                      <p><span>Código Postal:</span> ${permisionario.data.permisionario.domicilio.cp}</p>
                 </div>
                 <div class="row-info little-text">
                      <p><span>CIUDAD:</span> ${permisionario.data.permisionario.domicilio.ciudad}</p>
                      <p><span>ESTADO:</span> ${permisionario.data.permisionario.domicilio.estado}</p>
                 </div>
                 <div class="row-info-3 little-text">
                      <p><span>TELEFONO:</span> ${permisionario.data.permisionario.esr.telefono}</p>
                      <p><span>FAX:</span> ${permisionario.data.permisionario.esr.fax}</p>
                      <p><span>EMAIL:</span> ${permisionario.data.permisionario.esr.correo}</p>
                  </div>
                  <div class="row-info-2-1 little-text">
                      <p><span>NUMERO DE LICENCIA,PERMISO O AUTORIZACIÓN QUE AMPARA LA FUENTE SELLADA:</span> ${permisionario.data.permisionario.licencia}</p>
                      <p><span>VENCE:</span> ${permisionario.data.permisionario.fecha_vencimiento}</p>
                 </div>



              </div>
              <!-- FIN DE PRIMERA TABLA -->
              <!-- TABLA DATOS FUENTE -->
              <div class="table-center border">
                  <h4 class="tittle-table">DATOS DE LA FUENTE SELLADA</h3>

                  <div class="colum-info-3 little-text">

                       <p><span>FABRICANTE:</span> </p>
                       <p>${froti.marca}</p>
                       <p><span>RADIONÚCLEIDO:</span> </p>
                       <p>${froti.isotopo}</p>
                       <p><span>NO.SERIE:</span> </p>
                       <p>${froti.serie}</p>
                       <p><span>ACTIVIDAD ORIGINAL:</span> </p>
                       <p>${froti.actividad_original} ${froti.unidades}</p>

                  </div>
              </div>
              <!-- TABLA DATOS TITULAR AUTORIZACIÓN -->
              <div class="table-center border">
                  <h4 class="tittle-table">DATOS DEL PERMISIONARIO DE LA FUENTE SELLADA</h3>
                  <div class="colum-info little-text">
                       <p><span>Razón Social:</span>${froti.certificado.licencia.razon_social}</p>
                  </div>
                  <div class="row-info-2-1 little-text">
                      <p><span>AUTORIZACIÓN DE LA C.N.S.N.S PARA REALIZAR LA PRUEBA DE FUGA:</span>${froti.certificado.licencia.num_lic}</p>
                      <p><span>VENCE:</span>${froti.certificado.licencia.fecha_vencimiento}</p>
                 </div>
                 <div class="colum-info little-text">

                  <p><span>Domicilio:</span>${froti.certificado.licencia.domicilio.direccion}</p>
             </div>
                  <div class="row-info little-text">
                       <p><span>Colonia:</span>${froti.certificado.licencia.domicilio.colonia}</p>
                       <p><span>Código Postal:</span> ${froti.certificado.licencia.domicilio.cp}</p>
                  </div>
                  <div class="row-info little-text">
                       <p><span>CIUDAD:</span> ${froti.certificado.licencia.domicilio.ciudad}</p>
                       <p><span>ESTADO:</span>${froti.certificado.licencia.domicilio.estado}</p>
                  </div>
                  <div class="row-info-3 little-text">
                       <p><span>TELEFONO:</span> 5553620101</p>
                       <p><span>FAX:</span>5553987118</p>
                       <p><span>EMAIL:</span>sirsa@siradiacion.com.mx</p>
                   </div>
              </div>
              <!-- TABLA DATOS DEL SISTEMA DE MEDICIÓN -->
              <div class="table-center border">
                  <h4 class="tittle-table">DATOS DEL SISTEMA DE MEDICIÓN UTILIZADO PARA LA PRUEBA DE FUGA</h3>
                  <div class="colum-info-3 little-text">
                      <p><span></span> </p>
                       <p>(EQUIPO / DETECTOR)</p>
                       <p><span>DATOS DEL EQUIPO DE MEDICIÓN:</span> </p>
                       <p>${equipoPf.tipo} / ${detectorPf.tipo}</p>
                       <p><span>MARCA:</span> </p>
                       <p>${equipoPf.marca} / ${detectorPf.marca}</p>
                       <p><span>MODELO Y NUMERO DE SERIE:</span> </p>
                       <p>${equipoPf.modelo},serie ${equipoPf.serie} / ${detectorPf.modelo}, serie ${detectorPf.serie}</p>
                       <p><span>INTERVALO DE OPERACION:</span> </p>
                       <p>0 - 2.0 KeV</p>
                       <p><span>RESOLUCION:</span> </p>
                       <p>${equipoPf.resolucion}</p>
                       <p><span>EFICIENCIA PARA LA ENERGÍA DE INTERES:</span> </p>
                       <p>${parseFloat(froti.certificado.prueba.resultados.eficiencia*100).toFixed(2)} %</p>
                       <p><span>FECHA DE ULTIMA CALIBRACIÓN:</span> </p>
                       <p>${froti.certificado['prueba']['resultados'].fecha_larga}</p>
                       <p><span>PATRON DE REFERENCIA:</span> </p>
                       <p>PUNTUAL</p>
                       <p><span>MARCA:</span> </p>
                       <p>${fuentePf.marca}</p>
                       <p><span>RADIONÚCLEIDO:</span> </p>
                       <p>${fuentePf.isotopo}</p>
                       <p><span>ACTIVIDAD:</span> </p>
                       <p>${fuentePf.actividad_original} ${fuentePf.unidades}</p>
                       <p><span>FECHA DE CALIBRACIÓN:</span> </p>
                       <p>${fechaLarga(fuentePf.fecha_cal)}</p>
                  </div>

              </div>
              <!-- TABLA DATOS DEL FROTIS -->
              <div class="table-center border">
                  <h4 class="tittle-table">DATOS DE LA PRUEBA DE FUGA</h3>
                  <div class="colum-info-3 little-text">

                       <p><span>FECHA DE LA OBTENCIÓN DE LA MUESTRA O FROTIS:</span> </p>
                       <p>${fechaLarga(froti.fecha_frotis)}</p>
                       <p><span>LUGAR Y FECHA DE LA MEDICIÓN:</span> </p>
                       <p>TLALNEPANTLA ,ESTADO DE MÉXICO A ${froti.certificado['prueba']['resultados'].fecha_larga}</p>
                       <p><span>METODO DE PRUEBA:</span> </p>
                       <p>${froti.metodo} </p>
                       <p><span>TIEMPO DE MEDICIÓN DE LA RADIACIÓN DE FONDO,CON UN NIVEL DE CONFIANZA (NC) DEL 95%:</span></p>
                       <p><br>${froti.certificado['equipo']['tiempo']*60} SEGUNDOS</p>
                       <p><span>LECTURA DE RADIACIÓN DE FONDO:</span> </p>
                       <p>${froti.certificado['prueba']['cont_fondo']/5} CPM</p>
                       <p><span>TIEMPO DE MEDICIÓN DEL PATRON DE REFERENCIA,CON UN NIVEL DE CONFIANZA (NC) DEL 95%:</span> </p>
                       <p><br>${froti.certificado['equipo']['tiempo']*60} SEGUNDOS</p>
                       <p><span>TIEMPO DE MEDICIÓN DE LA MUESTRA,CON UN NIVEL DE CONFIANZA (NC) DEL 95%:</span> </p>
                       <p><br>${froti.certificado['equipo']['tiempo']*60} SEGUNDOS</p>
                       <p><span>ACTIVIDAD MINIMA DETECTABLE:</span> </p>
                       <p>${parseFloat(froti.certificado['prueba']['resultados'].lld).toFixed(2)} Bq</p>
                       <p><span>ACTIVIDAD DE LA MUESTRA MENOR A:</span> </p>
                       <p>${parseFloat(froti.certificado['prueba']['resultados'].lld).toFixed(2)} Bq</p>


                  </div>
                  <p class="smaller-letter">"EL PERIODO LIMITE ENTRE LA FECHA DE OBTENCIÓN DEL FROTIS Y LA FECHA DE MEDICIÓN NO DEBE SER MAYOR A 30 DÍAS NATURALES" </p>
              </div>
              <!-- TABLA DE RESULTADO-->
              <div class="table-center border">
                  <h4 class="tittle-table">RESULTADOS DE LA PRUEBA DE FUGA</h3>
                  <div class="colum-info-4 little-text text-center">
                      <p>LA FUENTE DE: </p>
                      <p><span class="underlined">${froti.isotopo}</span></p>
                      <p>NO. SERIE: <span class="underlined">${froti.serie}</span></p>
                      <p><span class="underlined">  SI  </span>ES HERMETICA</p>
                  </div>
                  <div class="colum-info-4 little-text text-center">
                      <p></p>
                      <p>Núcleido(s)</p>
                      <p></p>
                      <p>SI / NO</p>
                  </div> <br>
                  <p class="little-text">DECLARAMOS QUE LA PRUEBA DE FUGA QUE AVALA EL PRESENTE INFORME SE REALIZÓ CONFORME A LO REQUERIDO EN LA NOM-002-NUCL-2015, "PRUEBAS DE FUGA Y HERMETICIDAD PARA FUENTES SELLADAS"</p>

              </div>
          </div>
          <br><br><br>

          <div class="firmas colum-info-2">
              <p>${froti['certificado']['personal'].personal_realizo}</p>
              <p>${froti['certificado']['personal'].personal_autorizo}</p>
              <p class="under-text">NOMBRE Y FIRMA DE QUIEN REALIZÓ LA PRUEBA DE FUGA</p>
              <p class="under-text">NOMBRE Y FIRMA DE QUIEN AUTORIZÓ LA PRUEBA DE FUGA</p>
          </div>
          <p class="smaller-letter">NOTA: ESTE INFORME NO PUEDE SER REPRODUCIDO SIN LA AUTORIZACIÓN DE <span>SERVICIOS INTEGRALES PARA LA RADIACIÓN,S.A. DE C.V.</span></p>
          <div class="inf-footer">
              <img src="./assets/img/pie de pagina.png" alt="pie de pagina">
          </div>

     </section>
     <div class="underlined">
     </div>
      `;
  });




}
function generarPDF() {
  console.log('[IMPRIMIIENDO]');
  console.log(informesNum);
  informesNum.forEach(informe =>{
  // Obtener el elemento que contiene el contenido HTML que quieres convertir
  const elemento = document.getElementById(`${informe.informe_num}`);
  // Opciones de configuración para el PDF (puedes personalizar según tus necesidades)
  const opciones = {
      margin:[2,1,0,0],
      filename: informe.nombre_pdf,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all' } // Esta opción evita saltos de página automáticos
  };
  html2pdf(elemento, opciones);

  });



}
