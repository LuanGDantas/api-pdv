const { Routes } = require('express');

const detalharUsuario = require('../controladores/usuarios/detalharUsuarios');

const rotas = Routes();

rotas.get('usuarios', detalharUsuario)

module.exports = rotas;
