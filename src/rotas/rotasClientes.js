const { Router } = require('express');
const autenticacaoToken = require('../../src/intermediarios/autenticacaoToken');
const detalharCliente = require('../controladores/clientes/detalharCliente');
const verificarClienteExiste = require('../intermediarios/verificarClienteExiste');

const rotasClientes = Router();

rotasClientes.use(autenticacaoToken);

rotasClientes.get('/cliente/:id', verificarClienteExiste, detalharCliente);
