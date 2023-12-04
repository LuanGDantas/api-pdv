const bancoDeDados = require('../config/knexConfigurado');

const buscarCategoriaPorId = async id => {
    const categoria = await bancoDeDados('categorias').where({ id }).first();

    return categoria;
};

const buscarCategorias = async (filtros = {}) => {
    const categorias = await bancoDeDados('categorias').where(filtros);

    return categorias;
};

module.exports = {
    buscarCategoriaPorId,
    buscarCategorias,
};
