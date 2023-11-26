const bancoDeDados = require('../config/knexConfigurado');

const inserirUsuario = async (nome, email, senha) => {
    const [usuario] = await bancoDeDados('usuarios')
        .insert({ nome, email, senha })
        .returning('*');

    return usuario;
};

const buscarUsuarioPorEmail = async email => {
    const usuario = bancoDeDados('usuarios').where({ email }).first();

    return usuario;
};

module.exports = {
    inserirUsuario,
    buscarUsuarioPorEmail,
};
