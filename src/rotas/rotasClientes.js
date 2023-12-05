const { Router } = require('express');
const autenticacaoToken = require('../../src/intermediarios/autenticacaoToken');
const detalharCliente = require('../controladores/clientes/detalharCliente');
const verificarClienteExiste = require('../intermediarios/verificarClienteExiste');

const cadastrarCliente = require('../controladores/clientes/cadastrarCliente');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const autenticacaoToken = require('../intermediarios/autenticacaoToken');

const schemaCliente = require('../validacoes/schemaCliente');

const rotasClientes = Router();

rotasClientes.use(autenticacaoToken);

rotasClientes.get('/cliente/:id', verificarClienteExiste, detalharCliente);
rotasClientes.post(
    '/cliente',
    validarCorpoRequisicao(schemaCliente),
    cadastrarCliente,
);

module.exports = rotasClientes;
