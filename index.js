const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');


/* crear un app de express */
const app = express();

/* donde cargar los archivos estaticos */

app.use(express.static('public'));

// habilitar pub
app.set('view engine', 'pug');

// anadir la carpeta de las vistas
app.set('views',path.join(__dirname,'./views'));

// Habilitar body parser para leer datos del formulario 
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',routes());


app.listen(3000);



