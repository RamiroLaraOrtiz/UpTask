const express = require('express')
const router =express.Router();

// importar express validator 
const { body } = require('express-validator')

/* importar el controlador */
const proyectosController = require('../controllers/proyectosContoller');


module.exports = function(){

    /* Ruta para home */
    router.get('/',proyectosController.proyectosHome);

    router.get('/nuevo-proyecto',proyectosController.formularioProyecto);

    router.post('/nuevo-proyecto',
    body('nombre').not().isEmpty().trim().escape(),
    proyectosController.nuevoProyecto);
    

    //listar proyecto 
    router.get('/proyectos/:url',proyectosController.proyectoPorUrl)
    return router;

}
