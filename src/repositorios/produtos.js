const bancoDeDados = require('../config/knexConfigurado');

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
    alterarProduto,
    buscarProdutoPorId,
};
