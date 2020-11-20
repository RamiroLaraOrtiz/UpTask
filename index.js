const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');


// helpers con algunas funciones
const helpers = require('./helpers');

/* crear la conexion a la BD */
const db = require('./config/bd');

//importar el modelo
require('./models/Proyectos');

db.sync()
    .then(()=> console.log('Conectado al servidor'))
    .catch(error => console.log(error))
/* crear un app de express */
const app = express();

/* donde cargar los archivos estaticos */

app.use(express.static('public'));

// habilitar pub
app.set('view engine', 'pug');

// anadir la carpeta de las vistas
app.set('views',path.join(__dirname,'./views'));

//pasar vardump a la aplicacion
app.use((req, res, next)=>{

    res.locals.vardump =helpers.vardump;
    next();
});

//aprendiendo el middleware
/* app.use((req,res, next)=>{
    console.log('Yo soy middleware');
    next();
})
 */

// Habilitar body parser para leer datos del formulario 
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',routes());


app.listen(3000);



