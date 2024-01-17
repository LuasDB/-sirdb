const express = require('express');
const router = express.Router();
const { labPf } = require('../services/pf.service');
const { nextTick } = require('process');

const laboratorio = new labPf();

router.post('/',async(req,res,next)=>{
  try {

    const body = req.body;
    console.log(body);
    const newResiter = await laboratorio.create(body.collection,body);
    res.status(201).json(newResiter);
  } catch (error) {
    next(error);
  }

});

module.exports=router;
