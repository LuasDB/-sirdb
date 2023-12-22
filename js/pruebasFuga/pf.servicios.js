const monitorPfServ = document.getElementById('monitor');

/************************************************************************************************************************
 * FUNCIONES PARA CONSTUIR DOM EN PF SERVICIOS
 *************************************************************************************************************************/

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