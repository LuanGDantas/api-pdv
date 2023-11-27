const { compare } = require('bcryptjs');
const { buscarUsuarioPorEmail } = require('../../repositorios/usuarios');
const gerarTokenAutenticacao = require('../../utilitarias/gerarTokenAutenticacao');

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await buscarUsuarioPorEmail(email);
        if (!usuario) {
            return res.status(401).json({
                mensagem: 'Email e/ou senha inválido(s).',
            });
        }

        const senhaValida = await compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({
                mensagem: 'Email e/ou senha inválido(s).',
            });
        }

        const token = gerarTokenAutenticacao({ id: usuario.id });

        return res.status(200).json({ token });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = loginUsuario;
