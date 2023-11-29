const { verify } = require('jsonwebtoken');
const knexConfigurado = require('../config/knexConfigurado');

const autenticacaoToken = async (req, res, next) => {
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            return res.status(401).json({ mensagem: 'Usuario não autorizado' });
        }

        const tokenUsuario = authorization.split(' ')[1];

        const { id } = verify(tokenUsuario, process.env.JWT_SECRET_KEY);

        const usuario = await knexConfigurado('usuarios').where({id}).first();

        if (!usuario) {
            return res.status(401).json({ mensagem: 'Usuario não autorizado' });
        }
        req.usuario = usuario;

        next();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            mensagem: 'erro interno do servidor1',
        });
    }
};

module.exports = autenticacaoToken;
