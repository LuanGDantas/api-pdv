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

module.exports = {
    alterarProduto,
};
