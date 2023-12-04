const { Router } = require('express');

const cadastrarUsuario = require('../controladores/usuarios/cadastrarUsuario');
const detalharUsuario = require('../controladores/usuarios/detalharUsuarios');
const loginUsuario = require('../controladores/usuarios/loginUsuario');
const atualizarUsuario = require('../controladores/usuarios/atualizarUsuario');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const autenticacaoToken = require('../intermediarios/autenticacaoToken');

const schemaUsuario = require('../validacoes/schemaUsuario');
const schemaLoginUsuario = require('../validacoes/schemaLoginUsuario');

const rotasUsuario = Router();

rotasUsuario.post(
    '/usuario',
    validarCorpoRequisicao(schemaUsuario),
    cadastrarUsuario,
);
rotasUsuario.post(
    '/login',
    validarCorpoRequisicao(schemaLoginUsuario),
    loginUsuario,
);

rotasUsuario.use(autenticacaoToken);

rotasUsuario.get('/usuario', detalharUsuario);
rotasUsuario.put(
    '/usuario',
    validarCorpoRequisicao(schemaUsuario),
    atualizarUsuario,
);

module.exports = rotasUsuario;
