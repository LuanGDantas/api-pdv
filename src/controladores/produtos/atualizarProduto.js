const { alterarProduto } = require('../../repositorios/produtos');
const { deletarArquivo, enviarArquivos } = require('../../provedores/storage');
const crypto = require('crypto');

const atualizarProduto = async (req, res) => {
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    const produto = req.produto;
    const imagem = req.file;

    try {
        let produto_imagem = produto.produto_imagem;

        if (imagem) {
            if (produto.produto_imagem) {
                const path = produto.produto_imagem.replace(
                    `${process.env.URL_ENDPOINT}/${process.env.BLACKBLAZE_BUCKET}/`,
                    '',
                );
                await deletarArquivo(decodeURIComponent(path));
            }
            const idImagem = crypto.randomBytes(8).toString('hex');

            produto_imagem = await enviarArquivos(
                `produtos/${idImagem}-${imagem.originalname}`,
                imagem.buffer,
                imagem.mimetype,
            );
        }

        const produtoAtualizado = await alterarProduto({
            id,
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            produto_imagem,
        });

        return res.status(200).json(produtoAtualizado);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = atualizarProduto;
