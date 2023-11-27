const {
    buscarUsuarioPorEmail,
    inserirUsuario,
} = require('../../repositorios/usuarios');
const criptografarSenha = require('../../utilitarias/criptografarSenha');

const cadastrarUsuario = async (req, res) => {
    let { nome, email, senha } = req.body;

    try {
        const usuarioComMesmoEmailExiste = await buscarUsuarioPorEmail(email);
        if (!!usuarioComMesmoEmailExiste) {
            return res.status(400).json({
                mensagem: 'Já existe usuário cadastrado com o e-mail informado',
            });
        }

        senha = await criptografarSenha(senha);

        const { senha: _, usuario } = await inserirUsuario(nome, email, senha);

        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = cadastrarUsuario;
