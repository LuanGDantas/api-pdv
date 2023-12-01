const {
    buscarProdutoPorId,
    alterarProduto,
} = require('../../repositorios/produtos');

const atualizarProduto = async (req, res) => {
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    try {
        const produtoAtualizado = await alterarProduto({
            id,
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
        });

        return res.status(200).json(produtoAtualizado);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = atualizarProduto;
