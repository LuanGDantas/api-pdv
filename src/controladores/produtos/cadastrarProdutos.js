const { inserirProduto } = require('../../repositorios/produtos');

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    try {
        const cadastroProduto = await inserirProduto({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
        });

        return res.status(201).json(cadastroProduto);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = cadastrarProduto;
