const { enviarArquivos } = require('../../provedores/storage');
const { inserirProduto } = require('../../repositorios/produtos');

const crypto = require('crypto');

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    const imagem = req.file;

    try {
        let produto_imagem;

        if (imagem) {
            const idImagem = crypto.randomBytes(8).toString('hex');

            produto_imagem = await enviarArquivos(
                `produtos/${idImagem}-${imagem.originalname}`,
                imagem.buffer,
                imagem.mimetype,
            );
        }

        const cadastroProduto = await inserirProduto({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            produto_imagem,
        });

        return res.status(201).json(cadastroProduto);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = cadastrarProduto;
