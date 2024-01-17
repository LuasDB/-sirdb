//Creamos una funcion para manejar los handler errors
function errorHandler(err,req,res,next){
  res.status(500).json({
    message:err.message,
    stack:err.stack,

  });
}

//Creamos una funcion para manejar los logs errors
function logErrors(err,req,res,next){
  console.log(err);
  next(err);
}
//Creamos una funcion para el boom error
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = {
  logErrors,boomErrorHandler,errorHandler
}
