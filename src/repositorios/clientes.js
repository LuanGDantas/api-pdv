const bancoDeDados = require('../config/knexConfigurado');

const inserirCliente = async (
    nome,
    email,
    cpf,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado,
) => {
    const [cliente] = await bancoDeDados('clientes')
        .insert({
            nome,
            email,
            cpf,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
        })
        .returning('*');

    return cliente;
};

const buscarClientePorEmail = async email => {
    const cliente = await bancoDeDados('clientes').where({ email }).first();

    return cliente;
};

module.exports = {
    inserirCliente,
    buscarClientePorEmail,
};
