const express = require("express");

const categoriasControllers = require('../controllers/categoriasControllers');

const router = express.Router();

//rutas para las categorias
router.get('/', categoriasControllers.obtenerCategorias);
router.post('/', categoriasControllers.crearCategorias);

module.exports = router;