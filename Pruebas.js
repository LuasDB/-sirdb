let fechas = ['2022-10-03','2021-10-03','2023-10-23','2021-11-03','2021-12-03','2023-10-13'];


console.log(fechas);
console.log(fechas.sort());
console.log(fechas.sort((a,b)=>{return new Date(a).getTime() > new Date(b).getTime()}));

//Este es un comentario unico


// const seleccion= document.getElementById('unidades').options;

// seleccion.forEach(element => {
//     console.log(element.value);
// });
// for (const item of seleccion) {
//     console.log(item.value);
//     if(item.value === 'KBq'){
//         item.selected = true;
//     }
// }






