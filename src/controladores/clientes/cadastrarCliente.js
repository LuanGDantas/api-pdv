const {
    inserirCliente,
    buscarClientePorEmail,
    buscarClientePorCpf,
} = require('../../repositorios/clientes');

const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf } = req.body;

    try {
        const clienteComMesmoEmailExiste = await buscarClientePorEmail(email);
        if (!!clienteComMesmoEmailExiste) {
            return res.status(400).json({
                mensagem: 'Já existe cliente cadastrado com o e-mail informado',
            });
        }

        const clienteComMesmoCpfExiste = await buscarClientePorCpf(cpf);
        if (!!clienteComMesmoCpfExiste) {
            return res.status(400).json({
                mensagem: 'Já existe cliente cadastrado com o CPF informado',
            });
        }

        const cliente = await inserirCliente({ nome, email, cpf });

        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(500).json({ mensage: 'Erro Interno no Servidor' });
    }
};

module.exports = cadastrarCliente;
