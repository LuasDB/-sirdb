const laboratorioPf = 
  {
    licencias:[
      {
        id:'s1q2w3e4f34344l34',
        num_lic:'A00.200/1998/2023',
        nombre:'Pruebas de fuga a terceros',
        fecha_emision:'08/08/2023',
        fecha_vencimiento:'08/08/2027',
        razon_social:'Servicios Integrales para la Radiación,S.A. de C.V.',
        status:'Baja'
      },
      {
        id:'sdsdlf34344l34',
        num_lic:'A00.200/1998/2023',
        nombre:'Pruebas de fuga a terceros',
        fecha_emision:'08/08/2023',
        fecha_vencimiento:'08/08/2027',
        razon_social:'Servicios Integrales para la Radiación,S.A. de C.V.',
        status:'Baja'
      },
      {
        id:'sdsdlgg34344334',
        num_lic:'A00.200/1788/2021',
        nombre:'Pruebas de fuga a terceros',
        fecha_emision:'08/08/2021',
        fecha_vencimiento:'08/08/2023',
        razon_social:'Servicios Integrales para la Radiación,S.A. de C.V.',
        status:'Activo'
      }
    ],
    fuentes:[
      {
        id:'dsdkk43k4kdskj4344k34',
        isotopo:'Cs-137',
        energia:'662 KeV',
        serie:'6012-09',
        marca:'EBERLINE',
        actividad_original:185,
        multiplicador_base10:3,
        unidades:'mCi',
        fecha_cal:'25/10/2000',
        status:'Activo'
    },
    {
      id:'dsd23gfk4kdskj4344k34',
      isotopo:'Co-60',
      energia:'1117 KeV/1337KeV',
      serie:'6013-09',
      marca:'EBERLINE',
      actividad_original:44.4,
      multiplicador_base10:3,
      unidades:'KBq',
      fecha_cal:'25/10/2000',
      status:'Baja'
  }
    ],
    equipos:[
      {
        id:'dsd23gfkqi34kj4344k34',
         marca:'Ludlum',
         modelo:'2200',
         serie:'1458744',
         tipo:'Monocanal',
         status:'Activo'
      },
      {
        id:'dsd23gfk4kdskj43lod65',
        marca:'S.E. International',
        modelo:'Ursa II',
        serie:'25897441',
        tipo:'Multicanal',
        status:'Activo'
     },
     {
      id:'dsd23gfk4kdskj43w23e4',
      marca:'Ludlum',
      modelo:'20200',
      serie:'128939',
      tipo:'Monocual',
      status:'Baja'
   }
    ],
    detectores:[
      {
        id:'dsd23gfk4kdskj43opqw1',
        marca:'Ludlum',
        modelo:'44-10',
        serie:'PR125898',
        tipo:'Centelleo',
        hv:'900V',
        status:'Activo'
      },
      {
        id:'dsd23gfk4kdskj4234edc',
        marca:'Ludlum',
        modelo:'44-10',
        serie:'PR125898',
        tipo:'Centelleo',
        hv:'900V',
        status:'Activo'
      }
    ],
    personalPf:[
      {
        id:'dsd23gfk4kdskj431qasd',
        nombre:'Mario Saul De la fuente Barrueta',
        nivel:'Ing',
        cargo:'Auxiliar de E.S.R.',
        status:'Activo'      
      },
      {
        id:'dsd23gfk4kdskj43sd456',
        nombre:'Francisco Javier García Villanueva',
        nivel:'Ing',
        cargo:'E.S.R.',
        status:'Baja'      
      },
      {
        id:'dsd23gfk4kdskj43sderf',
        nombre:'Julio César Ríos Balderas',
        nivel:'Ing',
        cargo:'P.O.E.',
        status:'Activo'      
      }
    ]
  }
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
function agregar(tabla){
  console.log(`[Agregar Nuevo ${tabla}]`);
}
function editarElemento(id,tabla){
  console.log(`[EDITAR ${tabla}]:${id}`);

}
function deleteElemento(id,tabla){
  console.log(`[ELIMINAR ${tabla}]:${id}`);
}






