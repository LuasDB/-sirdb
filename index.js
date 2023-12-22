// Selección de menu desplegable
let menu_list =document.querySelectorAll('#menu-list li');
menu_list.forEach(element =>{
    element.addEventListener('click',()=>{
        
        menu_list.forEach(li =>{ li.classList.remove('selected'); });
        element.classList.add('selected');
        toggle.checked = false;
        aside.style.left='-310px';       
    });
});


/********************************************************************************************************************************************
 * Variables globales
 * *****************************************************************************************************************************************/
let monitor = document.getElementById('monitor');
let ruta= document.getElementById('ruta');
let objMenus = [

    `<section id="calibracion-proceso">
    <section class="container-cards-2">
        <div class="card card-cal-info" id="arribos">
            <span class="material-symbols-outlined" id="arribos">browser_updated</span>
            <h3 id="arribos">Arribos</h3>
            <p id="arribos">0</p>
        </div> 
        <div class="card card-cal-info" id="calibracion">
            <span class="material-symbols-outlined" id="calibracion">speed</span>
            <h3 id="calibracion">Calibración</h3>
            <p id="calibracion">0</p>
        </div> 
        <div class="card card-cal-info" id="firmas">
            <span class="material-symbols-outlined" id="firmas">draw</span>
            <h3 id="firmas">Firmas</h3>
            <p id="firmas">0</p>
        </div> 
        <div class="card card-cal-info" id="embalaje">
            <span class="material-symbols-outlined" id="embalaje">box_add</span>
            <h3 id="embalaje">Embalaje</h3>
            <p id="embalaje">0</p>
        </div> 
        <div class="card card-cal-info" id="envios">
            <span class="material-symbols-outlined" id="envios">local_shipping</span>
            <h3 id="envios">Envios</h3>
            <p id="envios">0</p>
        </div> 
    </section>
    <section class="bitacora">
         <h2 class="title-divider">Bitacora</h2>
    </section>
</section>  `,
    `<section id="arribos">
    <a class="btn-new" id="nuevo_arribo"><span class="material-symbols-outlined">
        add_circle
        </span>    Nuevo arribo</a>
    <h2 class="title-divider">Arribos</h2>
    <div class="card">
        <article class="card-info-gral">
            <div class="data-customer">
                <span>Servicios Integrales para la Radiación , S.A. de C.V.</span>
                <p><span>Equipo:</span> Ludlum 375</p>
                <p><span>Serie:</span> 152589</p>
                <p><span>Tipo Radiación:</span> Gamma</p>
                <p><span>Recibido:</span> Paqueteria</p>
            </div>
            <div class="obj-date success">
                <span>Fecha arribo</span>
                <p>28/09/2023</p> 
            </div>  
            <div></div> 
            <a class="btn btn-color" id="asignar_os">Asignar O.S.</a>    
        </article>
        
    </div>
    <div class="card">
        <article class="card-info-gral">
            <div class="data-customer">
                <span>COMERCIAL METALICA FE, S.A. DE C.V.</span>
                <p><span>Equipo:</span> Ludlum 375</p>
                <p><span>Tipo Radiación:</span> Gamma</p>
                <p><span>Recibido:</span> Área comercial</p>
            </div>
            <div class="obj-date success">
                <span>Fecha arribo</span>
                <p>28/09/2023</p> 
            </div>  
            <div></div> 
            <a class="btn btn-color" id="asignar_os">Asignar O.S.</a>    
        </article>
        
    </div>
    <div class="card">
        <article class="card-info-gral">
            <div class="data-customer">
                <span>Mondelez México, S. de R.L. </span>
                <p><span>Equipo:</span> S.E. International Inspector</p>
                <p><span>Tipo Radiación:</span> Gamma</p>
                <p><span>Recibido:</span> Paqueteria</p>
            </div>
            <div class="obj-date success">
                <span>Fecha arribo</span>
                <p>28/09/2023</p> 
            </div>  
            <div></div> 
            <a class="btn btn-color" id="asignar_os">Asignar O.S.</a>    
        </article>
        
    </div>   
</section>`,
    `<section id="arribo-form">
    <article class="card form-1">
        <h3>Consesionario</h3>
        <label for="nombre">Razón social</label>
        <input type="text" id="nombre" class="envioDbCliente">

    </article>
    <article class="card form-1">
        <h3>Equipo</h3>
        <label for="marca_monitor">Marca</label>
        <input type="text" name="marca_monitor" id="marca_monitor" placeholder="" class="envioDbEquipo">
        <label for="modelo_monitor">Modelo</label>
        <input type="text" name="modelo_monitor" id="modelo_monitor" placeholder="" class="envioDbEquipo">
        <label for="serie_monitor">Serie</label>
        <input type="text" name="serie_monitor" id="serie_monitor" placeholder="" class="envioDbEquipo">
        <div>
            <input type="checkbox" name="razon" id="check_det">
            <label for="razon">Detector externo</label> 
        </div>
        <div id="datos_detector" class="form-1 ">
            <label for="marca_detector" class="hiden">Marca detector</label>
            <input type="text" name="marca_detector" id="marca_detector" placeholder="" class="hiden"  class="envioDbEquipo">
            <label for="modelo_detector" class="hiden">Modelo detector</label>
            <input type="text" name="modelo_detector" id="modelo_detector" placeholder="" class="hiden"  class="envioDbEquipo">
            <label for="serie_detector" class="hiden">Serie detector</label>
            <input type="text" name="serie_detector" id="serie_detector" placeholder="" class="hiden"  class="envioDbEquipo">
        </div>
        <label for="serie_detector">Tipo de radiación</label>
        <select name="tipo_radiacion" id="tipo_radiacion" class="envioDbEquipo">
            <option value="Gamma">Gamma</option>
            <option value="Neutrones">Neutrones</option>
        </select>
        <label for="magnitud">Magnitud</label>
        <select  name="magnitud" id="magnitud" class="envioDbEquipo">
            <option value="mR/h">mR/h</option>
            <option value="µR/h">µR/h</option>
            <option value="µSv/h">µSv/h</option>
            <option value="µSv/h">mSv/h</option>
            <option value="m rem/h">m rem/h</option>
            <option value="CPM">CPM</option>
            <option value="CPS">CPS</option>
            <option value="Beeps/min">mR</option>
            <option value="Beeps/min">µSv</option>
        </select>
        <label for="intervalos">Intervalos</label>
        <input type="text" name="intervalos" id="intervalos" class="envioDbEquipo" >
    </article>
    <article class="card form-1">
        <h3>Condiciones físicas</h3>
        <div class="condiciones-fisicas">
            <p>Desc.</p>
            <p>BC</p>
            <p>Observaciones</p>
        
            <label for="carcasa">Carcasa:</label>
            <input type="checkbox" name="carcasa" id="carcasa" class="envioDbEquipo">
            <input type="text" id="observaciones_carcasa" class="envioDbEquipo">
            <label for="display">Display/Carátula:</label>
            <input type="checkbox" name="display" id="display"  class="envioDbEquipo">
            <input type="text" id="observaciones_display" class="envioDbEquipo"> 
            <label for="interruptores">Interruptores/botones: </label>
            <input type="checkbox" name="interruptores" id="interruptores" class="envioDbEquipo">
            <input type="text" id="observaciones_interruptores" class="envioDbEquipo">
            <label for="baterias">Baterías/Cavidad: </label>
            <input type="checkbox" name="baterias" id="baterias" class="envioDbEquipo">
            <input type="text" id="observaciones_baterias" class="envioDbEquipo">
            <label for="cable">Cable del detector: </label>
            <input type="checkbox" name="cable" id="cable" class="envioDbEquipo">
            <input type="text" id="observaciones_cable" class="envioDbEquipo">
            <label for="detector">Detector: </label>
            <input type="checkbox" name="detector" id="detector" class="envioDbEquipo">
            <input type="text" id="observaciones_detector" class="envioDbEquipo">
            <label for="matelin">Maletín/Embalaje: </label>
            <input type="checkbox" name="matelin" id="matelin" class="envioDbEquipo">

            
            <input type="text" id="observaciones_matelin" class="envioDbEquipo">
            <label for="software">CD/Software </label>
            <input type="checkbox" name="software" id="software" class="envioDbEquipo">
            <input type="text" id="observaciones_software" class="envioDbEquipo">
            <label for="cableAc">Cable de alimentación: </label>
            <input type="checkbox" name="cableAc" id="cableAc" class="envioDbEquipo">
            <input type="text" id="observaciones_cableAc" class="envioDbEquipo">
            <label for="cablePc">Cable PC: </label>
            <input type="checkbox" name="cablePc" id="cablePc" class="envioDbEquipo">
            <input type="text" id="observaciones_cablePc" class="envioDbEquipo">
            <label for="otro">Otro: </label>
            <input type="checkbox" name="otro" id="otro" class="envioDbEquipo">
            <input type="text" id="observaciones_otro" class="envioDbEquipo">
        </div>   
    </article>
    <article class="card form-1">
        <h3>Medio de ingreso</h3>
        <label for="recepcion">Recepción</label>
        <select name="recepcion" id="recepcion" class="envioDb">
            <option value="Servicio">Servicio</option>
            <option value="Paqueteria">Paqueteria</option>
            <option value="Comercial">Área comercial</option>
            <option value="Cliente">Entrega cliente</option>
        </select>
        <label for="comentarios_arribo">Comentarios</label>
        <textarea name="comentarios_arribo" id="comentarios_arribo" cols="30" rows="5" class="envioDb"></textarea>

    </article>
    <a class="btn-send" id="envio_arribo_db">Enviar</a>
</section>`,
    `<section id="os-form">
    <article class="card form-1">
        <h3>Datos del arribo</h3>
        <div class="data-customer">
            <span>COMERCIAL METALICA FE, S.A. DE C.V.</span>
            <p><span>Monitor:</span> Ludlum 375 <span>Serie:</span>256662 </p>
            <p><span>Detector:</span> Ludlum 44-9</p>
            <p><span>Tipo Radiación:</span> Gamma</p>
            <p><span>Recibido:</span>Paquetería</p>
            <p><span>Intervalos:</span>0-1,0-10,0-100</p>
        </div>
        
    </article>
    <article class="card form-1">
        <h3>Datos consesionario</h3>
        <label for="razon">Razón social</label>
        <input type="text" name="razon" placeholder="Razón Social / cliente">
        <label for="razon">Dirección</label>
        <textarea name="direccion" id="direccion" cols="30" rows="5" placeholder="De los reyes No. 4 , Industrial puente de vigas, Tlalnepantla de Baz, Edo de México, C.P. 54070,México"></textarea>
    </article>
    <article class="card form-1">
        <h3>Datos del servicio</h3>
        <label for="razon">Orden de Servicio</label>
        <input type="text" name="razon" placeholder="OS-T-PR23-005">
        <div>
            <input type="checkbox" name="tipo_servicio">
            <label for="razon">Servicio Urgente</label>
        </div>
        <div>
            <input type="checkbox" name="tipo_servicio">
            <label for="razon">Declaración de conformidad</label>
        </div>
        <label for="razon">Descripción de la declaración de conformidad</label>
        <input type="text" name="razon" placeholder="Declaración de conformidad">
        <input type="text" name="razon" placeholder="Norma de referencia">
        <label for="razon">Fecha de proxima calibración</label>
        <div>
            <input type="checkbox" name="tipo_servicio">
            <label for="razon">Certificado</label>
        </div>
        <div>
            <input type="checkbox" name="tipo_servicio">
            <label for="razon">Etiqueta</label>
        </div>
        <label for="razon">Periodo de calibración</label>
        <select name="periodo_cal" >
            <option value="12">12 meses</option>
            <option value="12">6 meses</option>
        </select>
        
     </article>

     <article class="card form-1">
        <h3>Dirección de entrega</h3>
        <label for="razon">Razón social</label>
        <input type="text" name="razon" placeholder="Razón Social / cliente">
        <label for="razon">Dirección</label>
        <textarea name="direccion" id="direccion" cols="30" rows="5" placeholder="De los reyes No. 4 , Industrial puente de vigas, Tlalnepantla de Baz, Edo de México, C.P. 54070,México"></textarea>
        <label for="razon">Atención a:</label>
        <input type="text" name="razon" placeholder="Ing. Aldo Aldana">
        <label for="razon">Seguro de envío</label>
        <select name="seguro_envio" >
            <option value="seguro">Envio con seguro</option>
            <option value="sin">Envio sin seguro</option>
            <option value="pendiente">Pendiente</option>
            <option value="cliente">Cliente</option>
        </select>
        <label for="razon">Comentarios</label>
        <textarea name="direccion" id="direccion" cols="30" rows="5" placeholder="Observaciones o comentarios"></textarea>
    
    </article>
     <a class="btn-send">Enviar</a>
</section>`,
    `            <section id="calibracion">
    <h2 class="title-divider">Calibración</h2>
    <div class="card">
        <article class="card-info-gral">
            <div class="data-customer">
                <span>Servicios Integrales para la Radiación , S.A. de C.V.</span>
                <p><span>Equipo:</span> Ludlum 375</p>
                <p><span>Tipo Radiación:</span> Gamma</p>
                <p><span>O.S. : </span> OS-T-PR23-005</p>
            </div>
            <div class="obj-date error">
                <span>Fecha objetivo</span>
                <p>28/09/2023</p> 
            </div>  
            <div></div> 
            <a class="btn btn-color" id="calibrar">Calibrar</a>    
        </article>
        
    </div>
    <div class="card">
        <article class="card-info-gral">
            <div class="data-customer">
                <span>Servicios Integrales para la Radiación , S.A. de C.V.</span>
                <p><span>Equipo:</span> Ludlum 375</p>
                <p><span>Tipo Radiación:</span> Gamma</p>
                <p><span>O.S. : </span> OS-T-PR23-005</p>
            </div>
            <div class="obj-date danger">
                <span>Fecha objetivo</span>
                <p>28/09/2023</p> 
            </div>  
            <div></div> 
            <a class="btn btn-color" id="calibrar">Calibrar</a>    
        </article>
        
    </div>
    <div class="card">
        <article class="card-info-gral">
            <div class="data-customer">
                <span>Servicios Integrales para la Radiación , S.A. de C.V.</span>
                <p><span>Equipo:</span> Ludlum 375</p>
                <p><span>Tipo Radiación:</span> Gamma</p>
                <p><span>O.S. : </span> OS-T-PR23-005</p>
            </div>
            <div class="obj-date success">
                <span>Fecha objetivo</span>
                <p>28/09/2023</p> 
            </div>  
            <div></div> 
            <a class="btn btn-color" id="calibrar">Calibrar</a>   
        </article>
        
    </div>
</section> `,
    ` <section id="calibracion-form">
    <article class="card form-1">
        <h3>Datos del equipo</h3>
        <div class="data-customer">
            <span>COMERCIAL METALICA FE, S.A. DE C.V.</span>
            <p><span>Monitor:</span> Ludlum 375</p>
            <p><span>Detector:</span> Ludlum 44-9</p>
            <p><span>Tipo Radiación:</span> Gamma</p>
            <p><span>Recibido:</span>Paquetería</p>
            <p><span>Intervalos:</span> 0-1,0-10,0-100</p>
        </div>
    </article>
    <article class="card form-1">
        <h3>Datos 1 </h3>
        <label for="fecha">Fecha</label>
        <input type="date"  id="fecha_cal" class="data-interval">
        <label for="">Alcance Caratula</label>
        <input type="number"  id="alcance" min="0" class="data-interval">
        <label for="resolucion">Resolución</label>
        <input type="number"  id="resolucion" min="0" class="data-interval">

    </article>
    <a id="nuevo_intervalo" class="btn-new"><span id="nuevo_intervalo" class="material-symbols-outlined" >
        add_circle
        </span> Nuevo intervalo</a>
        <div id="intervalos-area">
        
        </div>

    <form action="" class="card form-1" id="cal-area">
    </form>
    <a  class="btn-send">Finalizar calibración</a>
 </section>`,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``

    ];
  
const  generateRandomString = (num) => { 
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}
const user='MSDB';


    /********************************************************************************************************************************************
 * Variables traidas de MongoDB
 * *****************************************************************************************************************************************/
const cs_137={
    isotope:'Cs-137',
    halfLive:30.2,
    constGamma:3.3,
    actOriginalmCi:187.1,
    fechaCal:'2011/06/30',
}
const obturadores={
    uno:4,
    dos:10,
    tres:10,
}
//Objeto para guardar datos de calibración temporalmente
let datosIntervalos={
}
//Objeto que simulará la base de datos de los servicios
let servicios={
    'dsd4r567ygt54ef':{
        id:'dsd4r567ygt54ef',
        status:'arribo',
        arriboData:{
            cliente:{
                nombre:'SCHLUMBERGER OFFSHORE SERVICES (MÉXICO) N.V.',
            },
            equipo:{
                marca_monitor:'Tracerco',
                modelo_monitor:'T202-A-6',
                serie_monitor:'215808',
                marca_detector:'N/D',
                modelo_detector:'N/D',
                serie_detector:'N/D',
                tipo_radiacion:'Gamma',
                magnitud:'mR/h',
                intervalos:'0-1,0-10,0-100',
                condicionesFisArribo:{
                    carcasa:true,
                    observaciones_carcasa:'',
                    display:true,
                    observaciones_display:'',
                    interruptores:true,
                    observaciones_interruptores:'',
                    baterias:true,
                    observaciones_baterias:'',
                    cable:true,
                    observaciones_cable:'',
                    detector:true,
                    observaciones_detector:'',
                    maletin:true,
                    observaciones_maletin:'',
                    software:true,
                    observaciones_software:'',
                    cableAc:true,
                    observaciones_cableAc:'',
                    cablePc:true,
                    observaciones_cablePc:'',
                    otro:true,
                    observaciones_otro:'',
                }
            },
            medioArribo:{
                recepcion:'Servicio',
                comentarios_arribo:'Detecta radiación'
            },
            usuario_arribo:'MSDB',
            fecha_arribo:'2023-02-22',
        }
    },
    'd3er5t72sdgt654':{
        id:'d3er5t72sdgt654',
        status:'arribo',
        arriboData:{
            cliente:{
                nombre:'CRISOBA INDUSTRIAL, S.A. DE C.V. (PLANTA ECATEPEC)',
            },
            equipo:{
                marca_monitor:'Bicron',
                modelo_monitor:'Surveyor 50',
                serie_monitor:'A671X',
                marca_detector:'N/D',
                modelo_detector:'N/D',
                serie_detector:'N/D',
                tipo_radiacion:'Gamma',
                magnitud:'mR/h',
                intervalos:'0-1,0-10,0-100',
                condicionesFisArribo:{
                    carcasa:true,
                    observaciones_carcasa:'',
                    display:true,
                    observaciones_display:'',
                    interruptores:true,
                    observaciones_interruptores:'',
                    baterias:true,
                    observaciones_baterias:'',
                    cable:true,
                    observaciones_cable:'',
                    detector:true,
                    observaciones_detector:'',
                    maletin:true,
                    observaciones_maletin:'',
                    software:true,
                    observaciones_software:'',
                    cableAc:true,
                    observaciones_cableAc:'',
                    cablePc:true,
                    observaciones_cablePc:'',
                    otro:true,
                    observaciones_otro:'',
                }
            },
            medioArribo:{
                recepcion:'Paqueteria',
                comentarios_arribo:'Envuelto en playo'
            },
            usuario_arribo:'MMSP',
            fecha_arribo:'2023-05-21',
        }
    },
    'd3er5t72sddge65':{
        id:'d3er5t72sddge65',
        status:'arribo',
        arriboData:{
            cliente:{
                nombre:'HALLIBURTON DE MÉXICO, S. DE R.L. DE C.V.',
            },
            equipo:{
                marca_monitor:'Tracerco',
                modelo_monitor:'12-4',
                serie_monitor:'223440',
                marca_detector:'Ludlum',
                modelo_detector:'42-31H',
                serie_detector:'PR260633',
                tipo_radiacion:'Neutrones',
                magnitud:'m rem/h',
                intervalos:'0-1,0-10,0-100',
                condicionesFisArribo:{
                    carcasa:true,
                    observaciones_carcasa:'',
                    display:true,
                    observaciones_display:'',
                    interruptores:true,
                    observaciones_interruptores:'',
                    baterias:true,
                    observaciones_baterias:'',
                    cable:true,
                    observaciones_cable:'',
                    detector:true,
                    observaciones_detector:'',
                    maletin:true,
                    observaciones_maletin:'',
                    software:true,
                    observaciones_software:'',
                    cableAc:true,
                    observaciones_cableAc:'',
                    cablePc:true,
                    observaciones_cablePc:'',
                    otro:true,
                    observaciones_otro:'',
                }
            },
            medioArribo:{
                recepcion:'Pqueteria',
                comentarios_arribo:'El maletín se encontraba golpeado'
            },
            usuario_arribo:'JCRB',
            fecha_arribo:'2022-12-25',
        }
    },
    
    'd3er5t72qwege65':{
        id:'d3er5t72qwege65',
        status:'arribo',
        arriboData:{
            cliente:{
                nombre:'HALLIBURTON DE MÉXICO, S. DE R.L. DE C.V.',
            },
            equipo:{
                marca_monitor:'Ludlum',
                modelo_monitor:'12-4',
                serie_monitor:'223440',
                marca_detector:'Ludlum',
                modelo_detector:'42-31H',
                serie_detector:'PR260633',
                tipo_radiacion:'Neutrones',
                magnitud:'m rem/h',
                intervalos:'0-1,0-10,0-100',
                condicionesFisArribo:{
                    carcasa:true,
                    observaciones_carcasa:'',
                    display:true,
                    observaciones_display:'',
                    interruptores:true,
                    observaciones_interruptores:'',
                    baterias:true,
                    observaciones_baterias:'',
                    cable:true,
                    observaciones_cable:'',
                    detector:true,
                    observaciones_detector:'',
                    maletin:true,
                    observaciones_maletin:'',
                    software:true,
                    observaciones_software:'',
                    cableAc:true,
                    observaciones_cableAc:'',
                    cablePc:true,
                    observaciones_cablePc:'',
                    otro:true,
                    observaciones_otro:'',
                }
            },
            medioArribo:{
                recepcion:'Pqueteria',
                comentarios_arribo:'El maletín se encontraba golpeado'
            },
            usuario_arribo:'JCRB',
            fecha_arribo:'2023-08-25',
        }
    }



}
let equipos={

}
let ordenesServicio={
  

}





let contadorIntervalos=0;

     
/********************************************************************************************************************************************
 * Listeners
 * *****************************************************************************************************************************************/
function listeners(){
    aside.addEventListener('click',(e)=>{
        console.log('ASIDE:' + e.target.id);
        ruta.innerHTML=e.target.id;
        switch (e.target.id) {
            // case 'cal':                
            //     callCalibraciones();
            //     break;
        
            default:
                break;
        }
    });
    monitor.addEventListener('click',(e)=>{

        // console.log(e.target);
        // console.log(e.target.id.split(':'));
        // let op = e.target.id.split(':');

        // switch (op[0]) {
        //     case 'arribos':
        //         callListArribos();                 
        //         ruta.innerHTML+='/'+ op[0];
        //         break;
        //     case 'nuevo_arribo':
        //         monitor.innerHTML ='';
        //         monitor.innerHTML = objMenus[2];
        //         ruta.innerHTML+='/'+ op[0];
        //         break;
        //         case 'nuevo_arribo':
        //         monitor.innerHTML ='';
        //         monitor.innerHTML = objMenus[2];
        //         ruta.innerHTML+='/'+e.target.id;
        //         break;
        //     case 'check_det':
        //         if(document.getElementById('check_det').checked){
        //             document.getElementById('datos_detector').innerHTML=`
        //             <label for="marca_detector" >Marca detector</label>
        //             <input type="text" name="marca_detector" id="marca_detector" class="envioDbEquipo" >
        //             <label for="modelo_detector"> Modelo detector</label>
        //             <input type="text" name="modelo_detector" id="modelo_detector" class="envioDbEquipo" >
        //             <label for="serie_detector" >Serie detector</label>
        //             <input type="text" name="serie_detector" id="serie_detector" class="envioDbEquipo" >`
                    
                    
        //         }else{
        //             document.getElementById('datos_detector').innerHTML=`
        //             <label for="marca_detector" class="hiden">Marca detector</label>
        //             <input type="text" name="marca_detector" id="marca_detector" placeholder="" class="hiden" value="N/D">
        //             <label for="modelo_detector" class="hiden">Modelo detector</label>
        //             <input type="text" name="modelo_detector" id="modelo_detector" placeholder="" class="hiden" value="N/D">
        //             <label for="serie_detector" class="hiden">Serie detector</label>
        //             <input type="text" name="serie_detector" id="serie_detector" placeholder="" class="hiden" value="N/D">`;
        //                 }
                
        //         break;
        //     case 'mas_equipos':
                
        //         break;
            
        //     case 'envio_arribo_db':
        //         sendDBArribo();
        //         monitor.innerHTML ='';
        //         callListArribos();
        //         ruta.innerHTML='cal/arribos';
        //         break;
        //     case 'asignar_os':
        //         monitor.innerHTML ='';
        //         monitor.innerHTML = objMenus[3];
        //         ruta.innerHTML+='/'+e.target.id;
        //         callFormOs(op[1]);
        //         break;
        //     case 'calibracion':
        //         monitor.innerHTML ='';
        //         monitor.innerHTML = objMenus[4];
        //         ruta.innerHTML+='/'+e.target.id;
        //         break;
        //     case 'calibrar':
        //         monitor.innerHTML ='';
        //         monitor.innerHTML = objMenus[5];
        //         ruta.innerHTML+='/'+e.target.id;
        //         contadorIntervalos=0;
        //         break;
        //     case 'nuevo_intervalo':
        //          callFormCal();
        //         break;
        //     case 'guardar_intervalo':
        //         contadorIntervalos++;
        //         sendDBInterval();
        //         callNewInterval();
        //         break;         
        //     case 'envio_os_db':
        //         sendOs(op[1]);
        //         break; 
        //     case 'buscar_os':
        //         autoCompleteOs();
        //         break;  
        //         default:
        //         break;
        // }
        

    });
    
}

/********************************************************************************************************************************************
 * Funciones de la app
 * *****************************************************************************************************************************************/
function calculoPromedio(){
    //variables para el DOM

    //Para error
    let intervalo = document.getElementById('intervalo').value;
    let alcance = document.getElementById('alcance').value;
    let obturador={
        obt20_1:document.getElementById('20_1').checked ? obturadores.uno : 0,
        obt20_2:document.getElementById('20_2').checked ? obturadores.dos : 0,
        obt20_3:document.getElementById('20_3').checked ? obturadores.tres : 0,
        obt50_1:document.getElementById('50_1').checked ? obturadores.uno : 0,
        obt50_2:document.getElementById('50_2').checked ? obturadores.dos : 0,
        obt50_3:document.getElementById('50_3').checked ? obturadores.tres : 0,
        obt80_1:document.getElementById('80_1').checked ? obturadores.uno : 0,
        obt80_2:document.getElementById('80_2').checked ? obturadores.dos : 0,
        obt80_3:document.getElementById('80_3').checked ? obturadores.tres : 0,
    }
   
    let parametros=distanciasObjetivo(intervalo,alcance,cs_137,obturador);

    
    let promedio20= document.querySelectorAll('.valor20');
    let promedio50= document.querySelectorAll('.valor50');
    let promedio80= document.querySelectorAll('.valor80');

    let p20=document.getElementById('promedio20');
    let p50=document.getElementById('promedio50');
    let p80=document.getElementById('promedio80');

    let e20=document.getElementById('error20');
    let e50=document.getElementById('error50');
    let e80=document.getElementById('error80');

    let acumulador=0;
    let prom20 = 0;
    promedio20.forEach(dato =>{
         if(dato.value != null) {
            acumulador += Number(dato.value);
        }
    });
    prom20=acumulador/promedio20.length;
    let err20 = Math.abs(parametros.vo_20 - prom20)* 100/(parametros.vo_20 );
    if(err20 > 10){
        e20.parentNode.style.backgroundColor='red';
        e20.parentNode.style.color='white';
    }else{
        e20.parentNode.style.backgroundColor='var(--background-color)';
        e20.parentNode.style.color='var(--primary-color)';
    }
    acumulador=0;

    let prom50 = 0;
    promedio50.forEach(dato =>{
         if(dato.value != null) {
            acumulador += Number(dato.value);
        }
    });
    prom50=acumulador/promedio50.length;
    let err50 = Math.abs(parametros.vo_50 - prom50)* 100/(parametros.vo_50 );
    if(err50 > 10){
        e50.parentNode.style.backgroundColor='red';
        e50.parentNode.style.color='white';
    }else{
        e50.parentNode.style.backgroundColor='var(--background-color)';
        e50.parentNode.style.color='var(--primary-color)';
    }
    acumulador=0;

    let prom80 = 0;
    promedio80.forEach(dato =>{
         if(dato.value != null) {
            acumulador += Number(dato.value);
        }
    });
    prom80=acumulador/promedio80.length;
    let err80 = Math.abs(parametros.vo_80 - prom80)*100/(parametros.vo_80);
    if(err80 > 10){
        e80.parentNode.style.backgroundColor='red';
        e80.parentNode.style.color='white';
    }else{
        e80.parentNode.style.backgroundColor='var(--background-color)';
        e80.parentNode.style.color='var(--primary-color)';
    }
    acumulador=0;

    p20.innerHTML=`${prom20.toFixed(2)} `;
    p50.innerHTML=`${prom50.toFixed(2)}`;
    p80.innerHTML=`${prom80.toFixed(2)}`;

    e20.innerHTML=`${err20.toFixed(2)}`;
    e50.innerHTML=`${err50.toFixed(2)}`;
    e80.innerHTML=`${err80.toFixed(2)} `;

    



}
function calcDistancia(fuente,intensidad,obturador1,obturador2,obturador3){
    let int=1;
    if(obturador1 != 0){int=int*obturador1}
    if(obturador2 != 0){int=int*obturador2}
    if(obturador3 != 0){int=int*obturador3}
    console.log(obturador3)
        return i = Math.sqrt((actActual(fuente)*fuente.constGamma)/(intensidad*0.001*int));
    
    
      
}
function actActual(fuente){
    let time_cal=new Date(String(fuente.fechaCal));
    let time_act = new Date();
    let t = new Date(time_act.getTime() - time_cal.getTime());
    let time=t/(60*60*24*365*1000);
    return actividad = fuente.actOriginalmCi*Math.exp((-Math.LN2/fuente.halfLive)*time);
}
function intervalChange(){
    console.log('hubo cambio de intervalo');
    let intervalo = document.getElementById('intervalo').value;
    let alcance = document.getElementById('alcance').value;
    let obturador={
        obt20_1:document.getElementById('20_1').checked ? obturadores.uno : 0,
        obt20_2:document.getElementById('20_2').checked ? obturadores.dos : 0,
        obt20_3:document.getElementById('20_3').checked ? obturadores.tres : 0,
        obt50_1:document.getElementById('50_1').checked ? obturadores.uno : 0,
        obt50_2:document.getElementById('50_2').checked ? obturadores.dos : 0,
        obt50_3:document.getElementById('50_3').checked ? obturadores.tres : 0,
        obt80_1:document.getElementById('80_1').checked ? obturadores.uno : 0,
        obt80_2:document.getElementById('80_2').checked ? obturadores.dos : 0,
        obt80_3:document.getElementById('80_3').checked ? obturadores.tres : 0,
    }
   
    let parametros=distanciasObjetivo(intervalo,alcance,cs_137,obturador);
    modificarVoDist(parametros);  
    calculoPromedio(); 
}
function distanciasObjetivo(intervalo,alcance,fuente,obturador){
    return {
        vo_20:intervalo*alcance*0.2,
        vo_50:intervalo*alcance*0.5,
        vo_80:intervalo*alcance*0.8,
        dist_20:calcDistancia(fuente,intervalo*alcance*0.2,obturador.obt20_1,obturador.obt20_2,obturador.obt20_3),
        dist_50:calcDistancia(fuente,intervalo*alcance*0.5,obturador.obt50_1,obturador.obt50_2,obturador.obt50_3),
        dist_80:calcDistancia(fuente,intervalo*alcance*0.8,obturador.obt80_1,obturador.obt80_2,obturador.obt80_3),
    }

}
function modificarVoDist(parametros){

    let valor_objetivo20= document.getElementById('valor_objetivo20');
    let valor_objetivo50= document.getElementById('valor_objetivo50');
    let valor_objetivo80= document.getElementById('valor_objetivo80');
    let distancia20= document.getElementById('distancia20');
    let distancia50= document.getElementById('distancia50');
    let distancia80= document.getElementById('distancia80');


    valor_objetivo20.innerHTML=`
    ${parametros.vo_20.toFixed(2)}`;
    valor_objetivo50.innerHTML=`
    ${parametros.vo_50.toFixed(2)}`;
    valor_objetivo80.innerHTML=`
    ${parametros.vo_80.toFixed(2)}`;

    distancia20.innerHTML=`
    ${parametros.dist_20.toFixed(2)}`;
    distancia50.innerHTML=`
    ${parametros.dist_50.toFixed(2)}`;
    distancia80.innerHTML=`
    ${parametros.dist_80.toFixed(2)}`;

}

/********************************************************************************************************************************************
 * Funciones de envio a base de datos
 * *****************************************************************************************************************************************/
function sendDBInterval(){
     let data_general = document.querySelectorAll('.data-interval');
     let data20 = document.querySelectorAll('.data-interval20');
     let data50 = document.querySelectorAll('.data-interval50');
     let data80 = document.querySelectorAll('.data-interval80');

     
    let general ={};
     let valor20={};
     let valor50={};
     let valor80={};

     data_general.forEach(item =>{
       if(item.classList[1] == 'select'){
            general[item.id]=Number(item.value);
        }
        else if(item.type == 'date'){
            general[item.id]=item.value;
        }
        else{general[item.id]=Number(item.value);}
     });
     data20.forEach(item =>{
        if(item.value == 'on'){
            valor20[item.id]=item.checked;
        }else if(item.classList[1] == 'valor20'){
            valor20[item.id]=Number(item.value);
        }else{
            valor20[item.id]=Number(item.innerHTML);
        }
        
     });
     data50.forEach(item =>{
        if(item.value == 'on'){
            valor50[item.id]=item.checked;
        }else if(item.classList[1] == 'valor50'){
            valor50[item.id]=Number(item.value);
        }else{
            valor50[item.id]=Number(item.innerHTML);
        }
        
     });
     data80.forEach(item =>{
        if(item.value == 'on'){
            console.log(item.id + ':' + item.checked);
            valor80[item.id]=item.checked;
        }else if(item.classList[1] == 'valor80'){
            valor80[item.id]=Number(item.value);
        }else{
            valor80[item.id]=Number(item.innerHTML);
        }
        
     });
     
     datosIntervalos[contadorIntervalos]={
        general,valor20,valor50,valor80,
     }
     datosIntervalos['total_intervalos']=contadorIntervalos;
     console.log(datosIntervalos);
     

     
     



}
function sendDBArribo(){ 

    let data_equipo = document.querySelectorAll('.envioDbEquipo');
    let cliente = document.querySelector('.envioDbCliente');
    let medio_arribo = document.querySelectorAll('.envioDb');
    console.log(data_equipo);
    //Variable para guardar información que sewra enviada a la base de datos
    let arriboData={}
    let equipo={marca_detector:'N/D',modelo_detector:'N/D',serie_detector:'N/D'}
    let recepcion={}
    arriboData['cliente']={
        nombre:cliente.value,
    }
    data_equipo.forEach(item=>{
        if(item.type == 'checkbox'){   
            if(item.checked == true){
                equipo[item.id]='BC';
            }else{
                equipo[item.id]='NA';
            }       
        }else{
            equipo[item.id]=item.value;
        }
    });
    arriboData['equipo']=equipo;
    medio_arribo.forEach(item => {
        recepcion[item.id]=item.value;
    });
    arriboData['medioArribo']=recepcion;
    let fecha_arribo = new Date();
    console.log(`${fecha_arribo.getFullYear()}-${fecha_arribo.getMonth()}-${fecha_arribo.getDate()}`);
    arriboData['fecha_arribo']= `${fecha_arribo.getFullYear()}-${fecha_arribo.getMonth()}-${fecha_arribo.getDate()}`;
    arriboData['user_arribo']= user;
    console.log('Generado:');
    console.log(arriboData);

    servicios[generateRandomString(10)]={
        arriboData:arriboData,
        status:'arribo',
    }
    console.log('servicios:');
    console.log(servicios);




}
function sendOs(id){
    let dataConsesionario = document.querySelectorAll('.dataConsesionario');
    let dataServicio= document.querySelectorAll('.dataServicio');
    let dataEnvio = document.querySelectorAll('.dataEntrega');
    let dataOs = document.getElementById('orden');

    let consesionario={}
    let obj_os={}
    let servicio={}
    let envio={} 

    
    //Crear un registro para envio a DB

    dataConsesionario.forEach(item=>{
        consesionario[item.id]=item.value;
    });
    
    dataServicio.forEach(item=>{
        if(item.type == 'checkbox'){   
            if(item.checked == true){
                servicio[item.id]='Si';
            }else{
                servicio[item.id]='No';
            }       
        }else{
            servicio[item.id]=item.value;
        }
    });
    
    dataEnvio.forEach(item=>{
        envio[item.id]=item.value;
    });

    //Creamos registro de OS para auto llenado de formulario 
    obj_os={
        consesionario,
        servicio,
        envio
    }
   
    obj_os[dataOs.id]=dataOs.value;
    console.log('[ORDENES]:');
    console.log(ordenesServicio);
    let encontrado=false;
    let nvo_registro ={}
    nvo_registro[id]=dataOs.value;

    if(Object.keys(ordenesServicio).length === 0){
        ordenesServicio[dataOs.value]=obj_os;
        ordenesServicio[dataOs.value]['registros']=nvo_registro;
    } else{
        Object.keys(ordenesServicio).forEach(item=>{    
            if(item===dataOs.value){
                ordenesServicio[dataOs.value]['registros'][id]=dataOs.value;
                encontrado=false;
                return;
            }
            encontrado=true;
        });
        if(encontrado){
            ordenesServicio[dataOs.value]=obj_os;
            ordenesServicio[dataOs.value]['registros']=nvo_registro;
            encontrado=false;
        }
        
    } 
    console.log('[O.S]:');
    console.log(ordenesServicio);

    


    servicios[id]['orden']={...obj_os};
    console.log(servicios);

    console.log(servicios[id]['status']);
    servicios[id]['status']='calibracion';
    console.log(servicios[id]['status']);





   

}
/********************************************************************************************************************************************
 * Funciones de llamadas para construir DOM CALIBRACIONES
 * *****************************************************************************************************************************************/
function callCalibraciones(){
    monitor.innerHTML ='';
    monitor.innerHTML = objMenus[0];
    let num_arribos =0;
    let num_calibracion =0;
    let num_firmas =0;
    let num_embalaje =0;
    let num_envios =0;
    for(const [key,value] of Object.entries(servicios)){
        if(value.status == 'arribo')num_arribos++;
        if(value.status == 'calibracion')num_calibracion++;
        if(value.status == 'firmas')num_firmas++;
        if(value.status == 'embalaje')num_embalaje++;
        if(value.status == 'envios')num_envios++;
    }
    document.querySelector('.card-cal-info p#arribos').innerHTML=num_arribos;
    document.querySelector('.card-cal-info p#calibracion').innerHTML=num_calibracion;
    document.querySelector('.card-cal-info p#firmas').innerHTML=num_firmas;
    document.querySelector('.card-cal-info p#embalaje').innerHTML=num_embalaje;
    document.querySelector('.card-cal-info p#envios').innerHTML=num_envios;
   
}
function callListArribos(){
    monitor.innerHTML ='';
    monitor.innerHTML =`
        <section id="arribos">
            <a class="btn-new" id="nuevo_arribo"><span class="material-symbols-outlined">
                add_circle
                </span>    Nuevo arribo</a>
            <h2 class="title-divider">Arribos</h2>
            <div id="area-listado">
            </div>    
        </section>`;
    
    for(const [key,value] of Object.entries(servicios)){
        if(value.status == 'arribo'){
            let newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.innerHTML=`
                <article class="card-info-gral">
                <div class="data-customer">
                    <span>${value.arriboData.cliente.nombre}</span>
                    <p><span>Equipo:</span> ${value.arriboData.equipo.marca_monitor} ${value.arriboData.equipo.modelo_monitor}</p>
                    <p><span>Serie:</span> ${value.arriboData.equipo.serie_monitor}</p>
                    <p><span>Tipo Radiación:</span>${value.arriboData.equipo.tipo_radiacion}</p>
                    <p><span>Recibido:</span> ${value.arriboData.medioArribo.recepcion}</p>
                </div>
                <div class="obj-date success">
                    <span>Fecha arribo</span>
                    <p>${value.arriboData.fecha_arribo}</p> 
                </div>  
                <div></div> 
                <a class="btn btn-color" id="asignar_os:${key}">Asignar O.S.</a>    
                </article>`;
                document.getElementById('area-listado').appendChild(newCard);
        }
    }



}
function callFormOs(id){
    console.log('ID:',id);
    monitor.innerHTML ='';
    //LLamada a DB 
    let equipo = servicios[id];
    console.log(equipo);

    monitor.innerHTML = 
    `<section id="os-form">
    <article class="card form-1">
        <h3>Datos del arribo</h3>
        <div class="data-customer">
            <span>${equipo.arriboData.cliente.nombre}</span>
            <p><span>Monitor:</span> ${equipo.arriboData.equipo.marca_monitor} ${equipo.arriboData.equipo.modelo_monitor} <span> Serie:</span>${equipo.arriboData.equipo.serie_monitor}</p>
            <p><span>Detector:</span> ${equipo.arriboData.equipo.marca_detector} ${equipo.arriboData.equipo.modelo_detector} <span> Serie:</span>${equipo.arriboData.equipo.serie_detector}</p>
            <p><span>Tipo Radiación:</span> ${equipo.arriboData.equipo.tipo_radiacion}</p>
            <p><span>Recibido:</span> ${equipo.arriboData.medioArribo.recepcion}</p>
            <p><span>Intervalos:</span> ${equipo.arriboData.equipo.intervalos}</p>
        </div>
        
    </article>
    <article class="card form-1" >
        <h3>Orden de Servicio</h3>
        <label for="orden">Orden de Servicio</label>
        <input type="text" id="orden" class="dataOs">
        <button id="buscar_os">Buscar</button> 

        <h3>Datos consesionario</h3>
        <label for="razon">Razón social</label>
        <input type="text" name="razon" id="razon_social" class="dataConsesionario">
        <label for="razon">Dirección</label>
        <textarea name="direccion" id="direccion" cols="30" rows="5" class="dataConsesionario"></textarea>
    </article>
    <article class="card form-1">
        <h3>Datos del servicio</h3>
        
        <div>
            <input type="checkbox" id="tipo_servicio" class="dataServicio">
            <label for="tipo_servicio">Servicio Urgente</label>
        </div>
        <div>
            <input type="checkbox" id="declaracion_conformidad" class="dataServicio">
            <label for="declaracion_conformidad">Declaración de conformidad</label>
        </div>
        <label for="razon">Descripción de la declaración de conformidad</label>
        <input type="text" class="dataServicio" id="declaracion_conformidad_s" placeholder="Declaracion de conformidad">
        <input type="text" class="dataServicio" id="norma_referencia" placeholder="Norma de referencia">
        <label for="razon">Fecha de proxima calibración</label>
        <div>
            <input type="checkbox" id="fecha_cer" class="dataServicio">
            <label for="razon">Certificado</label>
        </div>
        <div>
            <input type="checkbox" id="fecha_etiqueta" class="dataServicio">
            <label for="razon">Etiqueta</label>
        </div>
        <label for="razon">Periodo de calibración</label>
        <select id="periodo_cal" class="dataServicio">
            <option value="12">12 meses</option>
            <option value="6">6 meses</option>
        </select>
     </article>

     <article class="card form-1">
        <h3>Dirección de entrega</h3>
        <label for="razon">Razón social</label>
        <input type="text" id="razon_entrega" class="dataEntrega">
        <label for="razon">Dirección</label>
        <textarea name="direccion" id="direccion_entrega" cols="30" rows="5" class="dataEntrega"></textarea>
        <label for="razon">Atención a:</label>
        <input type="text" id="atencion" class="dataEntrega">
        <label for="telefono">Tel. contacto:</label>
        <input type="tel" id="telefono" class="dataEntrega">
        <label for="correo">Correo notificaciones:</label>
        <input type="email" id="correo" class="dataEntrega">
        <label for="razon">Seguro de envío</label>
        <select id="seguro_envio" class="dataEntrega">
            <option value="seguro">Envio con seguro</option>
            <option value="sin seguro">Envio sin seguro</option>
            <option value="pendiente">Pendiente</option>
            <option value="cliente">Cliente</option>
        </select>
        <label for="razon">Comentarios</label>
        <textarea id="entrega_comentarios" cols="30" rows="5" class="dataEntrega"></textarea>
    
    </article>
     <a class="btn-send" id="envio_os_db:${id}">Enviar</a>
</section>
<section>
    <article class="card form-1">
        <h3>Asignar otros equipos a esta Orden de servicio</h3>
        <input type="checkbox" id="mas_equipos">
        
    </article>
    <div id="arribos_adicionales">

    </div>
</section>

`


}
function callFormCal(){
    let form = document.getElementById('cal-area');
    let contenido = document.createElement('div');
    contenido.innerHTML = `
    <div class="col-2 ">
                    <div>
                        <label for="temperatura">Temperatura °C</label>
                        <input type="number" id="temperatura" class="data-interval">
                        <label for="humedad">Humedad %</label>
                        <input type="number" id="humedad" class="data-interval">
                    </div>
                    <div>
                        <label for="intervalo">Intervalo</label>
                        <select name="intervalo" id="intervalo" onchange="intervalChange();" class="data-interval select">
                            <option value="0.1" >X 0.1</option>
                            <option value="1" selected>X 1</option>
                            <option value="10">X 10</option>
                            <option value="100">X 100</option>
                            <option value="1000">X 1000</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-cal">
                    <div>
                        <p>20%</p>
                        <div class="obturadores">
                            <div><label for="obt20_1">1</label>
                                <input type="checkbox" name="obt20_1" id="20_1" onchange="intervalChange();" class="data-interval20"></div>
                            <div><label for="obt20_2">2</label>
                                <input type="checkbox" name="obt20_2" id="20_2" onchange="intervalChange();" class="data-interval20"></div>
                            <div> <label for="obt20_3">3</label>
                                <input type="checkbox" name="obt20_3" id="20_3" onchange="intervalChange();" class="data-interval20"></div>
                        </div>
                        <div id="vo_20">
                            <p >VO: <span class="data-interval20" id="valor_objetivo20">0</span> </p>
                            <p >Dist:<span class="data-interval20" id="distancia20">0</span> cm</p>
                            <p>PROM:<span class="data-interval20" id="promedio20">0</span> </p>
                            <p >ERROR:<span class="data-interval20" id="error20">0</span> %</p>
                        </div>
                        
                        <input type="number" id="v20_1" name="v20_1" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_2" name="v20_2" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_3" name="v20_3" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_4" name="v20_4" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_5" name="v20_5" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_6" name="v20_6" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_7" name="v20_7" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_8" name="v20_8" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_9" name="v20_9" class="data-interval20 valor20" onchange="calculoPromedio();">
                        <input type="number" id="v20_10" name="v20_10" class="data-interval20 valor20" onchange="calculoPromedio();">
                    </div>
                    <div>
                        
                        <p>50%</p>50
                        <div class="obturadores">
                            <div><label for="obt50_1">1</label>
                                <input type="checkbox" name="obt50_1" id="50_1" onchange="intervalChange();" class="data-interval50"></div>
                            <div><label for="obt50_2">2</label>
                                <input type="checkbox" name="obt50_2" id="50_2" onchange="intervalChange();" class="data-interval50"></div>
                            <div> <label for="obt50_3">3</label>
                                <input type="checkbox" name="obt50_3" id="50_3" onchange="intervalChange();" class="data-interval50"></div>
                        </div>
                        <div id="vo_50">
                            <p >VO: <span class="data-interval50" id="valor_objetivo50">0</span> </p>
                            <p >Dist:<span class="data-interval50" id="distancia50">0</span> cm</p>
                            <p >PROM:<span class="data-interval50" id="promedio50">0</span> </p>
                            <p >ERROR:<span class="data-interval50" id="error50">0</span> %</p>
                        </div>
                        
                        <input type="number" id="v50_1" name="v50_1" class="data-interval50 valor50" onchange="calculoPromedio();">
                        <input type="number" id="v50_2" name="v50_2" class="data-interval50 valor50" onchange="calculoPromedio();">
                        <input type="number" id="v50_3" name="v50_3" class="data-interval50 valor50" onchange="calculoPromedio();">
                        <input type="number" id="v50_4" name="v50_4" class="data-interval50 valor50" onchange="calculoPromedio();">
                        <input type="number" id="v50_5" name="v50_5" class="data-interval50 valor50" onchange="calculoPromedio();">
                        <input type="number" id="v50_6" name="v50_6" class="data-interval50 valor50" onchange="calculoPromedio();" >
                        <input type="number" id="v50_7" name="v50_7" class="data-interval50 valor50" onchange="calculoPromedio();" >
                        <input type="number" id="v50_8" name="v50_8" class="data-interval50 valor50" onchange="calculoPromedio();" >
                        <input type="number" id="v50_9" name="v50_9" class="data-interval50 valor50" onchange="calculoPromedio();" >
                        <input type="number" id="v50_10" name="v50_10" class="data-interval50 valor50" onchange="calculoPromedio();" >
                    </div>
                    <div>
                        
                        <p>80%</p>
                        <div class="obturadores">
                            <div><label for="obt80_1">1</label>
                                <input type="checkbox" name="obt80_1" id="80_1" onchange="intervalChange();" class="data-interval80"></div>
                            <div><label for="obt80_2">2</label>
                                <input type="checkbox" name="obt80_2" id="80_2" onchange="intervalChange();" class="data-interval80"></div>
                            <div> <label for="obt80_3">3</label>
                                <input type="checkbox" name="obt80_3" id="80_3" onchange="intervalChange();" class="data-interval80"></div>
                        </div>

                        <div id="vo_80">
                            <p >VO: <span class="data-interval80" id="valor_objetivo80">0</span> </p>
                            <p >Dist:<span class="data-interval80" id="distancia80">0</span> cm</p>
                            <p >PROM:<span class="data-interval80" id="promedio80">0</span> </p>
                            <p >ERROR:<span class="data-interval80" id="error80">0</span> %</p>
                        </div>
                        
                        <input type="number" id="v80_1" name="v80_1" class="data-interval80 valor80" onchange="calculoPromedio();">
                        <input type="number" id="v80_2" name="v80_2" class="data-interval80 valor80" onchange="calculoPromedio();">
                        <input type="number" id="v80_3" name="v80_3" class="data-interval80 valor80" onchange="calculoPromedio();">
                        <input type="number" id="v80_4" name="v80_4" class="data-interval80 valor80" onchange="calculoPromedio();">
                        <input type="number" id="v80_5" name="v80_5" class="data-interval80 valor80" onchange="calculoPromedio();">
                        <input type="number" id="v80_6" name="v80_6" class="data-interval80 valor80" onchange="calculoPromedio();" >
                        <input type="number" id="v80_7" name="v80_7" class="data-interval80 valor80" onchange="calculoPromedio();" >
                        <input type="number" id="v80_8" name="v80_8" class="data-interval80 valor80" onchange="calculoPromedio();" >
                        <input type="number" id="v80_9" name="v80_9" class="data-interval80 valor80" onchange="calculoPromedio();" >
                        <input type="number" id="v80_10" name="v80_10" class="data-interval80 valor80" onchange="calculoPromedio();" >
                    </div>
                    <a class="btn-send" id="guardar_intervalo">Guardar</a>
                </div>
    `;
    form.appendChild(contenido);
    let intervalo = document.getElementById('intervalo').value;
    let alcance = document.getElementById('alcance').value;
    intervalChange();
    let obturador={
        obt20_1:document.getElementById('20_1').checked ? obturadores.uno : 0,
        obt20_2:document.getElementById('20_2').checked ? obturadores.dos : 0,
        obt20_3:document.getElementById('20_3').checked ? obturadores.tres : 0,
        obt50_1:document.getElementById('50_1').checked ? obturadores.uno : 0,
        obt50_2:document.getElementById('50_2').checked ? obturadores.dos : 0,
        obt50_3:document.getElementById('50_3').checked ? obturadores.tres : 0,
        obt80_1:document.getElementById('80_1').checked ? obturadores.uno : 0,
        obt80_2:document.getElementById('80_2').checked ? obturadores.dos : 0,
        obt80_3:document.getElementById('80_3').checked ? obturadores.tres : 0,
    }
    let parametros=distanciasObjetivo(intervalo,alcance,cs_137,obturador);
    modificarVoDist(parametros);   
}
function callNewInterval(){
    document.getElementById('cal-area').innerHTML='';
    let intervalos_area=document.getElementById('intervalos-area');
    intervalos_area.innerHTML='';
    //Se consulta desde la base de datos para poner intervalos
    for(const [key,value] of Object.entries(datosIntervalos)){
        let nuevo_intervalo= document.createElement('article');
         
    nuevo_intervalo.classList.add('card');
    nuevo_intervalo.classList.add('intervalo-cal');
    
    nuevo_intervalo.innerHTML=`
    <div>
        <p ><span>Intervalo:</span>0 - ${value.general.intervalo*value.general.alcance}</p>
        <p ><span>Promedio:</span>${value.valor50.promedio50}</p>
        <p ><span>Error:</span> ${value.valor50.error50} %</p>
    </div>
    <div>
        <span class="material-symbols-outlined focus-green">edit</span>
        <span class="material-symbols-outlined focus-red">delete</span>
    </div>`;
    intervalos_area.appendChild(nuevo_intervalo);
        
    }
   
}
function autoCompleteOs(){ 
    let os = document.getElementById('orden').value;
    let data =ordenesServicio[os]
    if(!data){
        alert('No hay esa orden');
    }else{
        console.log(ordenesServicio[os]);
        document.getElementById('razon_social').value=data.consesionario.razon_social;
        document.getElementById('direccion').value=data.consesionario.direccion;
        data.servicio.tipo_servicio == 'Si'
        ? document.getElementById('tipo_servicio').checked=true
        : document.getElementById('tipo_servicio').checked=false

        data.servicio.declaracion_conformidad == 'Si'
        ? document.getElementById('declaracion_conformidad').checked=true
        : document.getElementById('declaracion_conformidad').checked=false

        document.getElementById('declaracion_conformidad_s').value=data.servicio.declaracion_conformidad_s;
        document.getElementById('norma_referencia').value=data.servicio.norma_referencia;

        data.servicio.fecha_cer == 'Si'
        ? document.getElementById('fecha_cer').checked=true
        : document.getElementById('fecha_cer').checked=false

        data.servicio.fecha_etiqueta == 'Si'
        ? document.getElementById('fecha_etiqueta').checked=true
        : document.getElementById('fecha_etiqueta').checked=false

        document.getElementById('periodo_cal').value=data.servicio.periodo_cal;

        document.getElementById('razon_entrega').value=data.envio.razon_entrega;
        document.getElementById('direccion_entrega').value=data.envio.direccion_entrega;
        document.getElementById('atencion').value=data.envio.atencion;
        document.getElementById('telefono').value=data.envio.telefono;
        document.getElementById('correo').value=data.envio.correo;
        document.getElementById('seguro_envio').value=data.envio.seguro_envio;
        document.getElementById('entrega_comentarios').value=data.envio.entrega_comentarios;








       







    }
    


}


listeners();  