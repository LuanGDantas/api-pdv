const { Router } = require('express');

const cadastrarUsuario = require('../controladores/usuarios/cadastrarUsuario');
const detalharUsuario = require('../controladores/usuarios/detalharUsuarios');
const loginUsuario = require('../controladores/usuarios/loginUsuario');
const atualizarUsuario = require('../controladores/usuarios/atualizarUsuario');
const listarCategorias = require('../controladores/usuarios/listarCategorias');
const atualizarProduto = require('../controladores/produtos/atualizarProduto');
const cadastrarProduto = require('../controladores/produtos/cadastrarProdutos');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const autenticacaoToken = require('../intermediarios/autenticacaoToken');
const verificarProdutoExiste = require('../intermediarios/verificarProdutoExiste');
const verificarCategoriaExiste = require('../intermediarios/verificarCategoriaExiste');

const schemaUsuario = require('../validacoes/schemaUsuario');
const schemaLoginUsuario = require('../validacoes/schemaLoginUsuario');
const schemaProduto = require('../validacoes/schemaProduto');

const rotas = Router();

rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), cadastrarUsuario);

rotas.post('/login', validarCorpoRequisicao(schemaLoginUsuario), loginUsuario);

rotas.get('/categoria', listarCategorias);

rotas.use(autenticacaoToken);

rotas.get('/usuario', detalharUsuario);

rotas.put('/usuario', validarCorpoRequisicao(schemaUsuario), atualizarUsuario);

rotas.post('/produto', validarCorpoRequisicao(schemaProduto), cadastrarProduto);
rotas.put(
    '/produto/:id',
    validarCorpoRequisicao(schemaProduto),
    verificarProdutoExiste,
    verificarCategoriaExiste,
    atualizarProduto,
);

module.exports = rotas;
