const { Router } = require('express');

const cadastrarUsuario = require('../controladores/usuarios/cadastrarUsuario');
const detalharUsuario = require('../controladores/usuarios/detalharUsuarios');
const loginUsuario = require('../controladores/usuarios/loginUsuario');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const autenticacaoToken = require('../intermediarios/autenticacaoToken');

const schemaUsuario = require('../validacoes/schemaUsuario');
const schemaLoginUsuario = require('../validacoes/schemaLoginUsuario');

const rotas = Router();

rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), cadastrarUsuario);

rotas.post('/login', validarCorpoRequisicao(schemaLoginUsuario), loginUsuario);

rotas.use(autenticacaoToken);

rotas.get('/usuario', detalharUsuario);

module.exports = rotas;
