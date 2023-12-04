const { Router } = require('express');

const rotasCategorias = require('./rotasCategorias');
const rotasUsuarios = require('./rotasUsuarios');
const rotasProdutos = require('./rotasProdutos');

const rotas = Router();
rotas.use(rotasCategorias);
rotas.use(rotasUsuarios);
rotas.use(rotasProdutos);

module.exports = rotas;
