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

const buscarPedidoProdutosPorProduto = async produto_id => {
    const pedido_produtos = await bancoDeDados('pedido_produtos').where(
        'pedido_produtos.produto_id',
        '=',
        produto_id,
    );
    return pedido_produtos;
};

const buscarPedidos = async (filtro = {}) => {
    const pedidos = await bancoDeDados('pedidos').where(filtro);

    const resultado = [];
    for (let pedido of pedidos) {
        const pedido_produtos = await bancoDeDados('pedido_produtos').where({
            pedido_id: pedido.id,
        });
        resultado.push({
            pedido,
            pedido_produtos,
        });
    }
    return resultado;
};

module.exports = {
    buscarPedidos,
    inserirPedido,
    buscarPedidoProdutosPorProduto,
};
