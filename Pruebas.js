// let fechas = ['2022-10-03','2021-10-03','2023-10-23','2021-11-03','2021-12-03','2023-10-13'];


// console.log(fechas);
// console.log(fechas.sort());
// console.log(fechas.sort((a,b)=>{return new Date(a).getTime() > new Date(b).getTime()}));

// //Este es un comentario unico


// // const seleccion= document.getElementById('unidades').options;

// // seleccion.forEach(element => {
// //     console.log(element.value);
// // });
// // for (const item of seleccion) {
// //     console.log(item.value);
// //     if(item.value === 'KBq'){
// //         item.selected = true;
// //     }
// // }
// serviciosPf.forEach(item =>{
//     const fechas = item.frotis.map(fecha=>{
//         return fecha.fecha_frotis;
//     });
//     const f={}
//     fechas.forEach(fecha =>{
//         f[fecha]=(f[fecha] || 0) + 1;
//     });
//     let iso ={}
//     for (const key in f) {
//         item.frotis.forEach(l =>{
//             if(l.fecha_frotis === key){
//                 iso[l.isotopo]=(iso[l.isotopo] || 0) + 1;
//             }
//         });
//         console.log(`[FECHA]:${key}`);
//         for (const key in iso) {
//             console.log(`Isotopo: ${key},cantidad ${iso[key]}`);
//         }
//         iso={}
//     }
// });


// let conteo = {};

// // Iterar sobre los elementos del array
// serviciosPf.forEach(({ frotis,id }) => {
//     conteo = {};
//   frotis.forEach(({ isotopo, fecha_frotis, fecha_entrega }) => {
//     const clave = `${fecha_frotis}-${fecha_entrega}`;
    
//     // Contabilizar isotopos por cada combinación de fechas
//     if (!conteo[clave]) {
//       conteo[clave] = { total: 0, isotopos: {} };
//     }

//     conteo[clave].total += 1;

//     if (!conteo[clave].isotopos[isotopo]) {
//       conteo[clave].isotopos[isotopo] = 0;
//     }

//     conteo[clave].isotopos[isotopo] += 1;
//   });

//   console.log(`[${id}]:`)
//   console.log(conteo);
// });



// for (const clave in conteo) {
//   if (conteo.hasOwnProperty(clave)) {
//     const { total, isotopos } = conteo[clave];
//     const [fechaFrotis, fechaEntrega] = clave.split('-');

//     console.log(`| ${fechaFrotis} | ${fechaEntrega} | ${total} | ${Object.entries(isotopos).map(([isotopo, cantidad]) => `${isotopo}: ${cantidad}`).join(', ')} |`);
//   }
// }












