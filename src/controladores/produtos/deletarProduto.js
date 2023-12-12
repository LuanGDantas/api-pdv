const { excluirProduto } = require('../../repositorios/produtos');
const {deletarArquivo} = require('../../provedores/storage')

const deletarProduto = async (req, res) => {
    const { id } = req.produto;
    const produto = req.produto;
    try {
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
        return res.status(500).json({ mensagem: 'Erro Interno do Servidor' });
    }
};

module.exports = deletarProduto;
