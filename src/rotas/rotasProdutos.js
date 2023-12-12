const { Router } = require('express');

const atualizarProduto = require('../controladores/produtos/atualizarProduto');
const cadastrarProduto = require('../controladores/produtos/cadastrarProdutos');
const detalharProduto = require('../controladores/produtos/detalharProduto');
const listarProduto = require('../controladores/produtos/listarProduto');

const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const autenticacaoToken = require('../intermediarios/autenticacaoToken');
const verificarProdutoExiste = require('../intermediarios/verificarProdutoExiste');
const verificarCategoriaExiste = require('../intermediarios/verificarCategoriaExiste');

const schemaProduto = require('../validacoes/schemaProduto');
const deletarProduto = require('../controladores/produtos/deletarProduto');

const rotasProdutos = Router();

rotasProdutos.use(autenticacaoToken);

const multer = require('../config/multerConfigurado');

rotasProdutos.post(
    '/produto',
    multer.single('produto_imagem'),
    validarCorpoRequisicao(schemaProduto),
    verificarCategoriaExiste,
    cadastrarProduto,
);
rotasProdutos.put(
    '/produto/:id',
    multer.single('produto_imagem'),
    validarCorpoRequisicao(schemaProduto),
    verificarProdutoExiste,
    verificarCategoriaExiste,
    atualizarProduto,
);
rotasProdutos.get('/produto/:id', verificarProdutoExiste, detalharProduto);
rotasProdutos.get('/produto', listarProduto);
rotasProdutos.delete('/produto/:id', verificarProdutoExiste, deletarProduto);

module.exports = rotasProdutos;
