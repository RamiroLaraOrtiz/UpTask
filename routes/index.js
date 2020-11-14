const express = require('express')
const router =express.Router();

/* importar el controlador */

const proyectosController = require('../controllers/proyectosContoller');


module.exports = function(){

    /* Ruta para home */
    router.get('/',proyectosController.proyectosHome);

    router.get('/nuevo-proyecto',proyectosController.formularioProyecto);

    router.post('/nuevo-proyecto',proyectosController.nuevoProyecto);
    
    return router;

}
