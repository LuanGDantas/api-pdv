const bancoDeDados = require('../config/knexConfigurado');

const buscarCategoriaPorId = async id => {
    const categoria = await bancoDeDados('categorias').where({ id }).first();

    return categoria;
};

module.exports = {
    buscarCategoriaPorId,
};
