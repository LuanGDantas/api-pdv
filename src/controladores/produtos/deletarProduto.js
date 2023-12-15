const { excluirProduto } = require('../../repositorios/produtos');
const { deletarArquivo } = require('../../provedores/storage');
const {
    buscarPedidoProdutosPorProduto,
} = require('../../repositorios/pedidos');

const deletarProduto = async (req, res) => {
    const { id } = req.produto;
    const produto = req.produto;

    try {
        const pedidoProdutos = await buscarPedidoProdutosPorProduto(id);
        if (pedidoProdutos.length > 0) {
            return res.status(400).json({
                mensagem: `O produto só pode ser excluido se não estiver incluido a algum pedido`,
            });
        }
        if (produto.produto_imagem) {
            const path = produto.produto_imagem.replace(
                `${process.env.URL_ENDPOINT}/${process.env.BLACKBLAZE_BUCKET}/`,
                '',
            );
            await deletarArquivo(decodeURIComponent(path));
        }
        const produtoExcluido = await excluirProduto(id);
        if (!produtoExcluido) {
            return res
                .status(500)
                .json({ mensagem: `Erro ao deletar produto` });
        }

        return res.status(200).json({ mensagem: `Sucesso ao deletar produto` });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro Interno do Servidor' });
    }
};

module.exports = deletarProduto;
