const express = require('express');
const router = express.Router();
const { labPf } = require('../services/pf.service');


const laboratorio = new labPf();

router.get('/',async(req,res,next)=>{
  try {
    const group = await laboratorio.findAll();
    res.json(group);

  } catch (error) {
   next(error);
  }

});


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

router.patch('/',async (req,res,next)=>{
  const body = req.body;
  try {
    const update = await laboratorio.update(body.collection,body.id,body.lista);
    console.log(update);
    res.status(201).json(update);

  } catch (error) {
    next(error);
  }

});

router.delete('/',async(req,res,next)=>{
  const { id, collection } = req.body;
  try {
    const deleteOne = await laboratorio.delete(collection,id);
    res.status(201).json(deleteOne);
  } catch (error) {
    next(error);
  }
});

module.exports=router;
