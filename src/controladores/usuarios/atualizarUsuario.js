const {
    alterarUsuario,
    buscarUsuarioPorEmail,
} = require('../../repositorios/usuarios');
const criptografarSenha = require('../../utilitarias/criptografarSenha');

const atualizarUsuario = async (req, res) => {
    const { id } = req.usuario;
    const { nome, email, senha } = req.body;

    try {
        const usuarioComMesmoEmailExiste = await buscarUsuarioPorEmail(email);
        if (
            !!usuarioComMesmoEmailExiste &&
            usuarioComMesmoEmailExiste.id !== id
        ) {
            return res.status(400).json({
                mensagem: 'Já existe usuário cadastrado com o e-mail informado',
            });
        }

        const senhaCritografada = await criptografarSenha(senha);

        const { senha: _, ...usuario } = await alterarUsuario({
            id,
            nome,
            email,
            senha: senhaCritografada,
        });

        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno no Servidor' });
    }
};

module.exports = atualizarUsuario;
