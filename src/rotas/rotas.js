const { Router } = require('express');

const cadastrarUsuario = require('../controladores/usuarios/cadastrarUsuario');
const detalharUsuario = require('../controladores/usuarios/detalharUsuarios');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const schemaUsuario = require('../validacoes/schemaUsuario');

const rotas = Router();

rotas.get('/usuario', detalharUsuario);
rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), cadastrarUsuario);

module.exports = rotas;
