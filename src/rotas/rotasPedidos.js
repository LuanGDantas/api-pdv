const { Router } = require('express');

const cadastarPedido = require('../controladores/pedidos/cadastrarPedido');

const verificarClienteExiste = require('../intermediarios/verificarClienteExiste');
const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');

const schemaPedido = require('../validacoes/schemaPedido');

const rotasPedidos = Router();

rotasPedidos.post(
    '/pedido',
    validarCorpoRequisicao(schemaPedido),
    verificarClienteExiste,
    cadastarPedido,
);

module.exports = rotasPedidos;
