const express = require('express');

const router = express.Router();


const { pruebasFugaService } = require('../services/pf.service');
const service = new pruebasFugaService;

router.get('/',async(req,res)=>{
  const documentos = await service.findAll();
  documentos.forEach((doc) => {
    console.log(doc.id,'=>',doc.data());
  });
  res.json(documentos);


});

router.post('/',async(req,res)=>{

  const services = await service.createCities();
  res.json(services);

});


module.exports = router;
