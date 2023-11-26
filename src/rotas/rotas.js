const { Router } = require('express');
const rotasUsuarios = require('./usuarios');

const rotas = Router();

rotas.use(rotasUsuarios);

module.exports = rotas;
