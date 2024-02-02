const express = require('express');
const router = express.Router();
const { pruebasFugaService } = require('../services/pf.service');
const service = new pruebasFugaService;

router.get('/all/:a',async(req,res,next)=>{
  try {
    const allServices = await service.findAll(req.params);
    res.status(200).json(allServices);
  } catch (error) {
next(error);
  }
});
router.get('/informes/:a',async(req,res,next)=>{
  const { a } = req.params;
  try {
    const services = await service.findReports(a);
    res.status(201).json(services);
  } catch (error) {
    next(error);
  }
});
router.post('/',async(req,res,next)=>{
  const { body } = req;
  try {
    const services = await service.createService(body);
    res.status(201).json(services);
  } catch (error) {
    next(error);
  }
});
router.post('/informes',async(req,res,next)=>{
  const { body } = req;
  try {
    const services = await service.createReport(body);
    res.status(201).json(services);
  } catch (error) {
    next(error);
  }
});
router.patch('/',async(req,res,next)=>{
  try {
    const froti = await service.updateFrotis(req.body);
    res.status(201).json(froti);
  } catch (error) {
    next(error);
  }

});
router.patch('/service/',async(req,res,next)=>{
  try {
    const froti = await service.updateService(req.body);
    res.status(201).json(froti);
  } catch (error) {
    next(error);
  }

});
router.delete('/:id',async(req,res,next)=>{
  try {
    const deleteService = await service.deleteService(req.params,req.body);
    res.status(201).json(deleteService);
  } catch (error) {
    next(error)
  }

});

module.exports = router;
