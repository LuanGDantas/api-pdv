const { sign } = require('jsonwebtoken');

const gerarTokenAutenticacao = dados => {
    const token = sign(dados, process.env.JWT_SECRET_KEY, {
        expiresIn: '8h',
    });

    return token;
};

module.exports = gerarTokenAutenticacao;
