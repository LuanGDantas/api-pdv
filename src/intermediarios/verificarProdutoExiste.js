const { buscarProdutoPorId } = require('../repositorios/produtos');

const verificarProdutoExiste = async (req, res, next) => {
    const id = Number(req.params.id);

    try {
        if (isNaN(id)) {
            return res.status(400).json({
                mensagem:
                    'É obrigatorio informar o id do produto e deve ser um número',
            });
        }
        const produtoExiste = await buscarProdutoPorId(id);
        if (!produtoExiste) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }

        req.produto = produtoExiste;

        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = verificarProdutoExiste;
