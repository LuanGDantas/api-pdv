const bancoDeDados = require('../config/knexConfigurado');

const buscarCategoriaporId = async id => {
    const categoria = await bancoDeDados('categorias').where({ id }).first();

    return categoria;
};

module.exports = {
    buscarCategoriaporId,
};
