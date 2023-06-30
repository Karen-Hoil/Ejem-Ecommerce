const express = require("express");

const categoriasControllers = require('../controllers/categoriasControllers');

const router = express.Router();

//rutas para las categorias
router.get('/', categoriasControllers.obtenerCategorias);
router.get('/:id_categoria', categoriasControllers.obtenerCategoriasPorId);
router.post('/', categoriasControllers.crearCategorias);
router.put('/:id_categoria', categoriasControllers.actualizarCategoriasPorId);
router.delete('/:id_categoria', categoriasControllers.eliminarCategoriasPorId);

module.exports = router;