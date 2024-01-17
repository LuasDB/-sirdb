//Siempre declararemos una variable en cada modulo con su respectivo nombre del mismo elemento,
// en este caso la etiqueta main llamada 'monitor'
const monitorPf = document.getElementById('monitor');
/************************************************************************************************************************
 * FUNCIONES PARA CONSTUIR DOM EN PF
 *************************************************************************************************************************/
//Funcion para mandar a construir el dashboard de PF
function pruebasFugaDash(){
    monitorLab.innerHTML='';
    monitorLab.innerHTML=`
    <h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>

    <h2>Num. de PF en el año</h2>
    <canvas id="myChart" width="250" height="100"></canvas>
    <h2>Num. de Isotopos en el año</h2>
    <canvas id="myChart2" width="100" height="100"></canvas>`;

    const ctx = document.getElementById('myChart');
    const ctx2 = document.getElementById('myChart2');

    new Chart(ctx, {
    type: 'bar',
     data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    datasets: [{
      label: '# PF',
      data: [12, 10, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,

    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid:{
            display:false
        }
      },
      x:{
        grid:{
            display:false
        }
      }

    }
  }
    });

    new Chart(ctx2, {
        type: 'pie',
         data: {
        labels: ['Cs-137', 'Co-60', 'Am-241', 'Am-241/Be', 'Sr-90', 'Ba-131','H-3'],
        datasets: [{
          label: '# % isotopos',
          data: [12, 55, 3, 5, 2, 3,12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1,

        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid:{
                display:false
            }
          },
          x:{
            grid:{
                display:false
            }
          }

        }
      }
        });
    const menu = document.createElement('div');

  document.getElementById('atras').onclick = ()=> pruebasFugaMenu();





}
async function pruebasFugaLicencia(){
  //traemos la información de la base de datos a travez de fetch
  const labPf = await fetch(API_PF);
  const dataLab = await labPf.json();
  console.log(labPf);
  console.log(dataLab);

//Se debe mandar a llamar desde la Base de datos los campos correspondientes
monitorLab.innerHTML = '';
monitorLab.innerHTML=`
<h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>

<section class="card scroll-horizontal">
            <span class="tittle">No. Licencia</span>
            <table>
                <thead>
                    <th>Licencia</th>
                    <th>Licencia/Autorización</th>
                    <th>Fecha emisión</th>
                    <th>Fecha vencimiento</th>
                    <th>Estatus</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </thead>
                <tbody id="licencias">

                </tbody>
            </table>
            <br>
            <a class="btn-new licencias">Agregar nuevo</a>

        </section>
        <section class="card scroll-horizontal">
            <span class="tittle">Fuentes de referencia</span>
            <table>
                <thead>
                    <th>Isotopo</th>
                    <th>Energia</th>
                    <th>Serie</th>
                    <th>Act.Original</th>
                    <th>Fecha cal</th>
                    <th>Estatus</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </thead>
                <tbody id="fuentes">


                </tbody>
            </table>
            <br>
            <a class="btn-new fuentes">Agregar nuevo</a>

        </section>
        <section class="card scroll-horizontal">
            <span class="tittle">Equipo para realizar las pruebas</span>
            <table>
                <thead>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Serie</th>
                    <th>Tipo</th>
                    <th>Estatus</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </thead>
                <tbody id="equipos">


                </tbody>
            </table>
            <br>
            <a class="btn-new equipos">Agregar nuevo</a>

        </section>
        <section class="card scroll-horizontal">
            <span class="tittle">Detectores</span>
            <table>
                <thead>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Serie</th>
                    <th>Tipo</th>
                    <th>HV</th>
                    <th>Estatus</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </thead>
                <tbody id="detectores">


                </tbody>
            </table>
            <br>
            <a class="btn-new detectores">Agregar nuevo</a>

        </section>
        <section class="card scroll-horizontal">
            <span class="tittle">Personal Autorizado para P.F.</span>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Cargo</th>
                    <th>Estatus</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </thead>
                <tbody id="personal">


                </tbody>
            </table>
            <br>
            <a class="btn-new personalPf">Agregar nuevo</a>

        </section>`;
  let botones = document.querySelectorAll('.btn-new');
  let licencias = document.getElementById('licencias');
  let fuentes= document.getElementById('fuentes');
  let equipos = document.getElementById('equipos');
  let  detectores= document.getElementById('detectores');
  let  personal= document.getElementById('personal');

  botones.forEach(item =>{
  item.onclick = ()=> agregar(item.classList[1],'pf');
  });

  dataLab.licencias.lista.forEach(licencia =>{
  let fila = document.createElement('tr');
  console.log(licencia.id);
  fila.innerHTML = `
      <td>${licencia.num_lic}</td>
      <td>${licencia.nombre}</td>
      <td>${licencia.fecha_emision}</td>
      <td>${licencia.fecha_vencimiento}</td>
      <td ><span class="${licencia.status.toLocaleLowerCase()}">${licencia.status}</span></td>
      <td><img src="./assets/icons/editar.svg" class="edit_${licencia.id}"></img></td>
      <td><img src="./assets/icons/eliminar.svg" class="delete_${licencia.id}"></img></td>
      `;
      licencias.appendChild(fila);
      document.querySelector(`.edit_${licencia.id}`).onclick = ()=> editarElemento(licencia.id,'licencias','pf');
      document.querySelector(`.delete_${licencia.id}`).onclick = ()=> deleteElemento(licencia.id,'licencias','pf');
  });
  dataLab.fuentes.lista.forEach(item =>{
  let fila = document.createElement('tr');
  fila.innerHTML = `
  <td>${item.isotopo}</td>
  <td>${item.energia}</td>
  <td>${item.serie}</td>
  <td>${item.actividad_original} ${item.unidades}</td>
  <td>${item.fecha_cal}</td>
  <td ><span class="${item.status.toLocaleLowerCase()}">${item.status}</span></td>
  <td><img src="./assets/icons/editar.svg" class="edit_${item.id}"></img></td>
  <td><img src="./assets/icons/eliminar.svg" class="delete_${item.id}"></img></td>
      `;
      fuentes.appendChild(fila);
      document.querySelector(`.edit_${item.id}`).onclick = ()=> editarElemento(item.id,'fuentes','pf');
      document.querySelector(`.delete_${item.id}`).onclick = ()=> deleteElemento(item.id,'fuentes','pf');
  });
  dataLab.equipos.lista.forEach(item =>{
  let fila = document.createElement('tr');
  fila.innerHTML = `
  <td>${item.marca}</td>
  <td>${item.modelo}</td>
  <td>${item.serie}</td>
  <td>${item.tipo}</td>
  <td ><span class="${item.status.toLocaleLowerCase()}">${item.status}</span></td>
  <td><img src="./assets/icons/editar.svg" class="edit_${item.id}"></img></td>
      <td><img src="./assets/icons/eliminar.svg" class="delete_${item.id}"></img></td>
      `;
  equipos.appendChild(fila);
  document.querySelector(`.edit_${item.id}`).onclick = ()=> editarElemento(item.id,'equipos','pf');
  document.querySelector(`.delete_${item.id}`).onclick = ()=> deleteElemento(item.id,'equipos','pf');
  });
  dataLab.detectores.lista.forEach(item =>{
  let fila = document.createElement('tr');
  fila.innerHTML = `
  <td>${item.marca}</td>
  <td>${item.modelo}</td>
  <td>${item.serie}</td>
  <td>${item.tipo}</td>
  <td>${item.hv}</td>
  <td ><span class="${item.status.toLocaleLowerCase()}">${item.status}</span></td>
  <td><img src="./assets/icons/editar.svg" class="edit_${item.id}"></img></td>
      <td><img src="./assets/icons/eliminar.svg" class="delete_${item.id}"></img></td>
      `;
  detectores.appendChild(fila);
  document.querySelector(`.edit_${item.id}`).onclick = ()=> editarElemento(item.id,'detectores','pf');
  document.querySelector(`.delete_${item.id}`).onclick = ()=> deleteElemento(item.id,'detectores','pf');
  });
  dataLab.personalPf.lista.forEach(item =>{
  let fila = document.createElement('tr');
  fila.innerHTML = `
  <td>${item.nivel} ${item.nombre}</td>
  <td>${item.cargo}</td>
  <td ><span class="${item.status.toLocaleLowerCase()}">${item.status}</span></td>
  <td><img src="./assets/icons/editar.svg" class="edit_${item.id}"></img></td>
      <td><img src="./assets/icons/eliminar.svg" class="delete_${item.id}"></img></td>
      `;
  personal.appendChild(fila);
  document.querySelector(`.edit_${item.id}`).onclick = ()=> editarElemento(item.id,'personalPf','pf');
  document.querySelector(`.delete_${item.id}`).onclick = ()=> deleteElemento(item.id,'personalPf','pf');
  });

  document.getElementById('atras').onclick = ()=> pruebasFugaMenu();

}
function pruebasFugaMenu(){
    monitorLab.innerHTML='';
    monitorLab.innerHTML=`
    <h3 class="tittle" id="atras"> <span class="material-symbols-outlined tittle" id="atras">arrow_back</span> Atras</h3>
    <section class="container">
            <article class="card card-cal-info indicadores" >
                <img class="icon-lab indicadores" src="./assets/icons/Graph.svg" alt="icono grafico">
                    <h3 class="indicadores">Indicadores</h3>
            </article>
            <article class="card card-cal-info licencia" >
                <img class="icon-lab licencia" src="./assets/icons/Licencia-icon.svg" alt="icono grafico">
                    <h3 class="licencia">Licencia de Operación</h3>
            </article>
        </section>
`;
document.querySelector('.indicadores').onclick = ()=> pruebasFugaDash();
document.querySelector('.licencia').onclick = ()=> pruebasFugaLicencia();
document.getElementById('atras').onclick = ()=> callLabGestion();


}
