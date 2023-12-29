const monitorPfServ = document.getElementById('monitor');
const formulariosPfServ = [`
<h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3><section class="card form-1"> 
<span class="tittle">Solicitud de Análisis de Pruebas de Fuga</span>
<label for="os">Orden de Servicio</label>
<input type="text" id="os" name="os">
<button>Buscar</button>
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
`]

/************************************************************************************************************************
 * FUNCIONES PARA CONSTUIR DOM EN PF SERVICIOS
 *************************************************************************************************************************/
function sendRegistroPf(){
    //Creamos un objeto que contendra todos nuestros datos
    const objData = {
        permisionario:{
            domicilio:{},
            esr:{},
            frotis:[]
            }
        }
    objData['id']=generateRandomString(15);
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
    serviciosPf.push(objData);

    console.log(objData);


   


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
//Variable para agregar los fortis que se daran de alta
let listaFrotis = [];
function agregarFrotis(){
   let datos_frotis=  document.querySelectorAll('.nvoFrotis');
    console.log(listaFrotis);
    let objFrotis={}

    datos_frotis.forEach(frotis =>{
        objFrotis[frotis.id]=frotis.value;
    });
    objFrotis['id']=generateRandomString(10);
    listaFrotis.push(objFrotis);
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
    <label class="letra-color" for="fecha_entrega">Fecha de recepcion en Labrotarotio</label>
    <input type="date" name="fecha_entrega" id="fecha_entrega" class="nvoFrotis">
    <a class="btn-send" id="agregar">Agregar</a>`;
    document.getElementById('agregar').onclick = () => agregarFrotis();
}
function callNuevoServicioPf(){
    monitorPfServ.innerHTML = formulariosPfServ[0];
    document.getElementById('atras').onclick = ()=> callPruebasFuga();
    document.getElementById('nuevo_fortis').onclick = ()=> callNuevoFortis();
    document.getElementById('enviar_registro').onclick = ()=> sendRegistroPf();  

    
    listaFrotis = [];
}
function callPruebasFuga(){
    
    monitorPfServ.innerHTML=`
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
            <span class="tittle">BITACORA</span>`;
    document.getElementById('nuevo').onclick = () => callNuevoServicioPf();
    //Usamos Variable para cada tabla que exista
    const solicitudes = document.getElementById('solicitudes');    
    //Construimos cada fila de la tabla
    let conteo={}
    let clave='';
    serviciosPf.forEach(({ frotis,id, permisionario,os}) => {
        conteo = {};
        clave='';

      frotis.forEach(({ isotopo, fecha_frotis, fecha_entrega }) => {
        clave = `${id},${isotopo},${fecha_frotis},${fecha_entrega}`;
        
        // Contabilizar isotopos por cada combinación de fechas
        if (!conteo[clave]) {
          conteo[clave] = { total: 0, isotopos: {} };
        }
    
        conteo[clave].total += 1;
    
        if (!conteo[clave].isotopos[isotopo]) {
          conteo[clave].isotopos[isotopo] = 0;
        }
    
        conteo[clave].isotopos[isotopo] += 1;
      });
      

      console.log(`[${id}]:`)
      console.log(conteo);
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
function realizarPf(clave){
    const [id,isotopo,fechaFrotis, fechaEntrega] = clave.split(',');
    const permisionario = serviciosPf.find((item) => {return item.id === id});
    console.log(permisionario);
    //construimos los datalis desde nuestra base de datos de gestion 
    monitorPfServ.innerHTML =`
    <datalist id="fuentes">   
        </datalist>
        <datalist id="detectores">
        </datalist>
        <datalist id="equipos">  
        </datalist>
        <datalist id="personal_realizo">
        </datalist>
        <datalist id="personal_autorizo">
        </datalist>
    `;
    const fuentes = document.getElementById('fuentes');
    const detectores = document.getElementById('detectores');
    const equipos = document.getElementById('equipos');
    const personal_realizo = document.getElementById('personal_realizo');
    const personal_autorizo = document.getElementById('personal_autorizo');

    laboratorioPf.fuentes.forEach(fuente =>{
        if(fuente.status === 'Activo'){
            fuentes.innerHTML+=`<option value="${fuente.isotopo} serie ${fuente.serie}">`;
        }
    });
    laboratorioPf.detectores.forEach(detector =>{
        if(detector.status === 'Activo'){
            detectores.innerHTML+=`<option value="${detector.marca} ${detector.modelo}serie ${detector.serie}">`;
        }
    });
    laboratorioPf.equipos.forEach(equipo =>{
        if(equipo.status === 'Activo'){
            equipos.innerHTML+=`<option value="${equipo.marca} ${equipo.modelo} serie ${equipo.serie}">`;
        }
    });
    laboratorioPf.personalPf.forEach(persona =>{
        if(persona.status === 'Activo'){
            personal_realizo.innerHTML+=`<option value="${persona.nivel} ${persona.nombre}, ${persona.cargo}">`;
        }
    });
    laboratorioPf.personalPf.forEach(persona =>{
        if(persona.status === 'Activo'){
            personal_autorizo.innerHTML+=`<option value="${persona.nivel} ${persona.nombre}, ${persona.cargo}">`;
        }
    });
    // construccion de el formulario completo
    monitorPfServ.innerHTML+=`
    <section class="card form-1"> 
        <p><span class="tittle">Datos del permisionario:</span></p>
        <p ><span class="bold-primary-color">Razón social:</span>${permisionario.permisionario.razon_social}</p>
        <p><span class="bold-primary-color">Número de licencia:</span> ${permisionario.permisionario.licencia} </p> 
        <p><span class="bold-primary-color">Fecha de vencimiento:</span>${permisionario.permisionario.fecha_vencimiento}</p>
        <p><span class="bold-primary-color">Dirección:</span> ${permisionario.permisionario.domicilio.calle},${permisionario.permisionario.domicilio.colonia},${permisionario.permisionario.domicilio.ciudad},${permisionario.permisionario.domicilio.estado},${permisionario.permisionario.domicilio.cp}</p>         
    </section>
    <section class="card form-1">
        <span class="tittle">Equipo utilizado para la Prueba de Fuga</span>
        <label for="equipo">Equipo</label>
        <input list="equipos" id="equipo" name="equipo">
        <label for="detector">Detector</label>
        <input list="detectores" id="detector" name="detector">
        <label for="fuente">Fuente de referencia</label>
        <input list="fuentes" id="fuente" name="fuente">
        <p><span class="bold-primary-color">Actividad Original:</span>185244 Bq</p>
        <p><span class="bold-primary-color">Fecha calibración:</span> 11/12/2015</p>
        <p class="bold-primary-color"><span class="letra-color">Actividad Actual:</span>152244 Bq</p>    
        <span class="tittle">Parametros de calibración</span>
        <label for="threshold">T.H. (mV)</label>
        <input type="number" id="threshold" name="threshold">
        <label for="hv">H.V. (V)</label>
        <input type="number" id="hv" name="hv">
        <label for="gain">Ganancia (X)</label>
        <input type="number" id="gain" name="gain">
        <label for="gain">Tiempo de conteo</label>
        <input type="number" id="gain" name="gain">
    </section>
    <section class="card form-1">
        <span class="tittle">Personal responsable de la prueba de fuga</span>  
        <label for="personal_realizo">Realizó la prueba</label>
        <input list="personal_realizo" id="personal_realizo" name="personal_realizo" >
        <label for="personal_autorizo">Autorización</label>
        <input list="personal_autorizo" id="personal_autorizo" name="personal_autorizo" >
    </section>
    <section class="card form-1"> 
        <span class="tittle">Resultados de la prueba para ${isotopo}</span>
        <label for="cont_fuente">Conteos de fuente</label>
        <input type="number" id="cont_fuente" name="cont_fuente" placeholder="Cuentas">            
        <label for="cont_fondo">Conteos de fondo</label>
        <input type="number" id="cont_fondo" name="cont_fondo" placeholder="Cuentas">  
        <span class="tittle">Fuentes</span> 
        <div class="form-1" id="lista_frotis"> 
            
            </div>
        <a class="btn-send">Enviar Resultados</a>     
    </section>
    `;
    const lista = document.getElementById('lista_frotis');
    permisionario.frotis.forEach(froti=>{
        const claveF = `${id},${froti.isotopo},${froti.fecha_frotis},${froti.fecha_entrega}`;
        if(claveF === clave){

            console.log(`[Agregado a tabla]: ${froti.serie}`);
            lista.innerHTML+=`
            <label for="frotis1" class="letra-color">${froti.serie}</label>
            <input type="number" id="froti_${froti.serie}" name="frotis1" placeholder="Cuentas">
            `
        }
    });

}