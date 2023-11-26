const { Router } = require('express');
const rotasUsuarios = require('./rotasUsuarios');

const rotas = Router();

rotas.use(rotasUsuarios);

module.exports = rotas;
