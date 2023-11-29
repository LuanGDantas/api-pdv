const { verify } = require('jsonwebtoken');
const knexConfigurado = require('../config/knexConfigurado');

const autenticacaoToken = async (req, res, next) => {
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            return res
                .status(400)
                  .json({
                    mensagem:
                        'Para acessar este recurso um token de autenticação válido deve ser enviado.',
                });
        }

        const tokenUsuario = authorization.split(' ')[1];

        const { id } = verify(tokenUsuario, process.env.JWT_SECRET_KEY);

        const usuario = await knexConfigurado('usuarios').where({ id }).first();

        if (!usuario) {
            return res.status(401).json({ mensagem: 'Usuario não autorizado' });
        }
        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(401).json({
            mensagem: 'Usuário não autorizado',
        });
    }
};

module.exports = autenticacaoToken;
