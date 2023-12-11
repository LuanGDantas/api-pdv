const { inserirPedido } = require('../../repositorios/pedidos');
const {
    buscarProdutoPorId,
    alterarProduto,
} = require('../../repositorios/produtos');
const enviarEmailParaCliente = require('../../utilitarias/enviarEmailViaSmtp');

const cadastarPedido = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos } = req.body;
    const cliente = req.cliente;

    try {
        let valor_total = 0;
        const produtos = [];
        for (let { produto_id, quantidade_produto } of pedido_produtos) {
            const produto = await buscarProdutoPorId(produto_id);
            if (!produto) {
                return res.status(404).json({
                    mensagem: `Produto com ID ${produto_id} não encontrado`,
                });
            }

            if (produto.quantidade_estoque >= quantidade_produto) {
                return res.status(400).json({
                    mensagem: `Estoque insuficiente do produto, ${produto.descricao}, para atender ao pedido`,
                });
            }

            valor_total += produto.valor * quantidade_produto;
            produtos.push({
                ...produto,
                quantidade_produto,
            });
        }

        const pedido = await inserirPedido({
            cliente_id,
            observacao,
            valor_total,
            produtos,
        });

        const produtosAtualizados = [];
        for (let {
            id,
            quantidade_estoque,
            quantidade_produto,
        } of pedido.produtos) {
            const produtoAtualizado = await alterarProduto({
                id,
                quantidade_estoque: quantidade_estoque - quantidade_produto,
            });
            produtosAtualizados.push({
                ...produtoAtualizado,
                quantidade_produto,
            });
        }
        pedido.produto = produtosAtualizados;

        enviarEmailParaCliente({
            para: {
                nome: cliente.nome,
                email: cliente.email,
            },
            assunto: `${cliente.nome}, seu pedido foi confirmado!`,
            template: './src/templates/emailConfirmacaoPedido.html',
            dados: produtoAtualizado,
        });

        return res.status(201).json(pedido);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};
