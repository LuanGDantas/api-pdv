const { Router } = require('express');

const detalharCliente = require('../controladores/clientes/detalharCliente');
const cadastrarCliente = require('../controladores/clientes/cadastrarCliente');
const atualizarCliente = require('../controladores/clientes/atualizarCliente');
const listarClientes = require('../controladores/clientes/listarClientes');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const verificarClienteExiste = require('../intermediarios/verificarClienteExiste');
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
rotasClientes.put(
    '/cliente',
    validarCorpoRequisicao(schemaCliente),
    atualizarCliente,
);
rotasClientes.get('/cliente', listarClientes);

module.exports = rotasClientes;
