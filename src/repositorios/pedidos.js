const bancoDeDados = require('../config/knexConfigurado');

const inserirPedido = async ({
    cliente_id,
    observacao,
    valor_total,
    produtos,
}) => {
    const [pedido] = await bancoDeDados('pedidos')
        .insert({
            cliente_id,
            observacao,
            valor_total,
        })
        .returning('*');

    await bancoDeDados('pedido_produtos').insert(
        produtos.map(
            ({ id: produto_id, valor: valor_produto, quantidade_produto }) => {
                return {
                    pedido_id: pedido.id,
                    produto_id,
                    quantidade_produto,
                    valor_produto,
                };
            },
        ),
    );

    return {
        ...pedido,
        produtos,
    };
};

module.exports = {
    inserirPedido,
};
