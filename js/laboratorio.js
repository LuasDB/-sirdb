const monitorLab= document.getElementById('monitor');
/************************************************************************************************************************
 * FUNCIONES PARA CONSTUIR DOM
 *************************************************************************************************************************/
function pruebasFugaMenu(){
    monitorLab.innerHTML='';
    monitorLab.innerHTML=`
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
}
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

document.querySelector('.calibracion').onclick = ()=> calibracionDash();
document.querySelector('.pruebas_fuga').onclick = ()=> pruebasFugaMenu();

}
function calibracionDash(){
    console.log('Calibracion');
}
function pruebasFugaDash(){
    monitorLab.innerHTML='';
    monitorLab.innerHTML=`
    <h2>Num. de PF en el año</h2>
    <canvas id="myChart" width="400" height="400"></canvas>
    <h2>Num. de Isotopos en el año</h2>
    <canvas id="myChart2" width="400" height="400"></canvas>`;

    const ctx = document.getElementById('myChart');
    const ctx2 = document.getElementById('myChart2');

    new Chart(ctx, {
    type: 'bar',
     data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    datasets: [{
      label: '# PF',
      data: [12, 55, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
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
          label: '# PF',
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
   
      


}

