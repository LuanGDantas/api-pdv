const { hash } = require('bcryptjs');

const criptografarSenha = async senha => {
    const senhaCriptografada = await hash(senha, 10);

    return senhaCriptografada;
};

module.exports = criptografarSenha;
