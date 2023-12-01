const { buscarCategoriaPorId } = require('../repositorios/categorias');

const verificarCategoriaExiste = async (req, res, next) => {
    const categoria_id = req.body.categoria_id ?? req.query.categoria_id;
    try {
        const categoriaExiste = await buscarCategoriaPorId(categoria_id);
        if (!categoriaExiste) {
            return res
                .status(404)
                .json({ mensagem: 'Categoria não encontrada' });
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = verificarCategoriaExiste;
