const express = require('express');
const router = express.Router();
const { Cliente } = require('../services/clientes.service');
const cliente = new Cliente;


router.get('/', async(req,res,next)=>{
  try {
    const clientes = await cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    next(error);
  }

})

router.post('/',async(req,res,next)=>{
  try {
    const nuevo = await cliente.create(req.body);
    //Falta el envio de correo automatico al cliente

    ///////
    res.status(201).json(nuevo);
  } catch (error) {
    next(error);
  }
})


module.exports = router
