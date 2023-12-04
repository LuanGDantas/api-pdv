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
        return res.status(500).json({ mensage: 'Erro do servidor' });
    }
};

module.exports = cadastrarProduto;
