const bancoDeDados = require('../config/knexConfigurado');

const buscarClientePorId = async id => {
    const existeCliente = await bancoDeDados('clientes').where({ id }).first();
    return existeCliente;
};

module.exports = {
    buscarClientePorId,
};
