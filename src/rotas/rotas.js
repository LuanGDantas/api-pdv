const { Router } = require('express');

const cadastrarUsuario = require('../controladores/usuarios/cadastrarUsuario');
const detalharUsuario = require('../controladores/usuarios/detalharUsuarios');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const loginUsuario = require('../controladores/usuarios/loginUsuario');

const schemaUsuario = require('../validacoes/schemaUsuario');
const schemaLoginUsuario = require('../validacoes/schemaLoginUsuario');

const rotas = Router();

rotas.get('/usuario', detalharUsuario);
rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), cadastrarUsuario);
rotas.post('/login', validarCorpoRequisicao(schemaLoginUsuario), loginUsuario);

module.exports = rotas;
