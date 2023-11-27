const { verify } = require('jsonwebtoken');

const autenticacaoToken = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return res.status(401).json({ mensagem: 'Usuario não autorizado' });
        }

        const token = authorization.split(' ')[1];

        const tokenUsuario = verify(token, process.env.JWT_SECRET_KEY);

        if (!tokenUsuario) {
            return res.status(401).json({ mensagem: 'Usuario não autorizado' });
        }
        next()
    } catch (error) {
        return res.status(500).json({
            mensagem: 'erro interno do servidor',
        });
    }
};

module.exports = autenticacaoToken;
