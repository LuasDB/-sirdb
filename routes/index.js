//Traemos express para utilizar Router
const express = require('express');
//Variable para la ruta especifica que vamos golpear
const pfServices = require('./pf.router');
const pfLaboratory = require('./pfLab.router');
const clientes = require('./clientes')

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);

  router.use('/pruebasFugaServices',pfServices);
  router.use('/pfLaboratorio',pfLaboratory);
  router.use('/clientes',clientes);
}

module.exports = {
  routerApi
}
