const bancoDeDados = require('../config/knexConfigurado');

const inserirProduto = async (
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
) => {
    const [produto] = await bancoDeDados('produtos')
        .insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
        })
        .returning('*');

    return produto;
};

const alterarProduto = async ({
    id,
    descricao,
    quantidade_estoque,
    valor,
    categotia_id,
}) => {
    const [produto] = await bancoDeDados('produtos')
        .where({ id })
        .update({
            descricao,
            quantidade_estoque,
            valor,
            categotia_id,
        })
        .returning('*');

    return produto;
};

const buscarProdutoPorId = async id => {
    const produto = await bancoDeDados('produtos').where({ id }).first();

    return produto;
};

module.exports = {
    inserirProduto,
    alterarProduto,
    buscarProdutoPorId,
};
