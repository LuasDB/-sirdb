//Mandamos a llamar a express para inciar nuestro servidor
const express = require('express');
//Creamos una variable para llamar a las funciones de express
const app = express();
const port = process.env.PORT || 3000;
//Traemos la libreria de cors para evitar estos errores en produccion
const cors = require('cors');
//Traemos routerApi para gestionar las rutas detectadas por el servidor
const { routerApi } = require('./routes');
const { logErrors,boomErrorHandler,errorHandler } = require('./middlewares/errorHandler');


app.use(express.json());
app.use(cors());
//Agregamos al routerApi nuesta app 1
routerApi(app);
//Despues del router agregamos los middlewares de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


//Le decimos a nuestra aplicacion que la ruta ../laboratorio contendra nuestros estaticos para que se muestre nuestra pagina
app.use('/laboratorio', express.static('public'));

app.listen(port, ()=>{
  console.log('[PUERTO]:',port);
})
