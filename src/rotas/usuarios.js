const { Router } = require('express');
const { cadastrarUsuario } = require('../controladores/usuarios');
const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const schemaUsuario = require('../validacoes/schemaUsuario');

const rotasUsuarios = Router();

rotasUsuarios.post(
    '/usuario',
    validarCorpoRequisicao(schemaUsuario),
    cadastrarUsuario,
);

module.exports = rotasUsuarios;
