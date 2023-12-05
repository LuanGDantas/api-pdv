const { Router } = require('express');

const cadastrarCliente = require('../controladores/clientes/cadastrarCliente');
const listarClientes = require('../controladores/clientes/listarClientes');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const autenticacaoToken = require('../intermediarios/autenticacaoToken');

const schemaCliente = require('../validacoes/schemaCliente');

const rotasClientes = Router();

rotasClientes.use(autenticacaoToken);

rotasClientes.post(
    '/cliente',
    validarCorpoRequisicao(schemaCliente),
    cadastrarCliente,
);
rotasClientes.get('/cliente', listarClientes);

module.exports = rotasClientes;
