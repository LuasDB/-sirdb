let fechas = ['2022-10-03','2021-10-03','2023-10-23','2021-11-03','2021-12-03','2023-10-13'];


console.log(fechas);
console.log(fechas.sort());
console.log(fechas.sort((a,b)=>{return new Date(a).getTime() > new Date(b).getTime()}));





