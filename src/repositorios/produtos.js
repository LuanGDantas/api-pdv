const bancoDeDados = require('../config/knexConfigurado');

const inserirProduto = async ({
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
    produto_imagem,
}) => {
    const [produto] = await bancoDeDados('produtos')
        .insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            produto_imagem,
        })
        .returning('*');

    return produto;
};

const alterarProduto = async ({
    id,
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
    produto_imagem,
}) => {
    console.log(produto_imagem);
    const [produto] = await bancoDeDados('produtos')
        .where({ id })
        .update({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            produto_imagem,
        })
        .returning('*');

    return produto;
};

const buscarProdutoPorId = async id => {
    const produto = await bancoDeDados('produtos').where({ id }).first();

    return produto;
};

const buscarProduto = async (filtro = {}) => {
    const produto = await bancoDeDados('produtos').where(filtro);
    return produto;
};

const excluirProduto = async id => {
    return await bancoDeDados('produtos').where({ id }).del();
};

module.exports = {
    inserirProduto,
    alterarProduto,
    buscarProdutoPorId,
    buscarProduto,
    excluirProduto,
};
