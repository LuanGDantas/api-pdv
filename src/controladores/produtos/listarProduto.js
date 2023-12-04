const { buscarCategoriaPorId } = require('../../repositorios/categorias');
const { buscarProduto } = require('../../repositorios/produtos');

const listarProduto = async (req, res) => {
    const { categoria_id } = req.query;
    try {
        if (categoria_id != null) {
            const existeCategoria = await buscarCategoriaPorId(categoria_id);
            if (!existeCategoria) {
                return res.status(401).json({ mensagem: 'Categoria inválida' });
            }
            const produtosComCategoria = await buscarProduto({ categoria_id });
            return res.status(200).json(produtosComCategoria);
        }
        const lista = await buscarProduto();
        return res.status(200).json(lista);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno do Servidor' });
    }
};

module.exports = listarProduto;
