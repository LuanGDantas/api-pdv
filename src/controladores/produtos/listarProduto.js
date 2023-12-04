const { buscarCategoriaPorId } = require('../../repositorios/categorias');
const { listaDeProduto } = require('../../repositorios/produtos');

const listarProduto = async (req, res) => {
    const { categoria_id } = req.query;
    try {
        const lista = await listaDeProduto({ categoria_id });
        return res.status(200).json(lista);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno do Servidor' });
    }
};

module.exports = listarProduto;
