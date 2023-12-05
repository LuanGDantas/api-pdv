const { Router } = require('express');

const cadastrarCliente = require('../controladores/clientes/cadastrarCliente');
const atualizarCliente = require('../controladores/clientes/atualizarCliente');

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
rotasClientes.put(
    '/cliente',
    validarCorpoRequisicao(schemaCliente),
    atualizarCliente,
);

module.exports = rotasClientes;
