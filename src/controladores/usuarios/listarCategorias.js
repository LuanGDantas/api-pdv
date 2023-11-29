//const { buscarCategorias } = require('../../repositorios/usuarios');

const knexConfigurado = require('../../config/knexConfigurado');

const listarCategorias = async (req, res) => {

    try {

        const categorias = await knexConfigurado('categorias');
        if (categorias.length === 0) {
            return res
                .status(400)
                .json({ mensagem: 'Não há categorias para listar' });
        }
        return res.status(200).json(categorias);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = listarCategorias;
