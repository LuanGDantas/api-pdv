const { excluirProduto } = require('../../repositorios/produtos');

const deletarProduto = async (req, res) => {
    const { id } = req.produto;

    try {
        const excluir = await excluirProduto(id);

        const excluidos = excluir > 1 ? 'produtos' : 'produto';

        return res
            .status(200)
            .json({ mensagem: `Sucesso ao deletar ${excluir} ${excluidos}` });
    } catch (error) {
        
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = deletarProduto;
