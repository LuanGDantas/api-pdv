const { Router } = require('express');

const listarCategorias = require('../controladores/categorias/listarCategorias');

const rotasCategorias = Router();

rotasCategorias.get('/categoria', listarCategorias);

module.exports = rotasCategorias;
