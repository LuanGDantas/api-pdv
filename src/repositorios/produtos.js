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

module.exports = inserirProduto;
