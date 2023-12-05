const { excluirProduto } = require('../../repositorios/produtos');

const deletarProduto = async (req, res) => {
    const { id } = req.produto;

    try {
        const produtoExcluido = await excluirProduto(id);
        if (!produtoExcluido) {
            return res
                .status(500)
                .json({ mensagem: `Erro ao deletar produto` });
        }

        return res.status(200).json({ mensagem: `Sucesso ao deletar produto` });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno do Servidor' });
    }
};

module.exports = deletarProduto;
