const { alterarCliente } = require('../../repositorios/clientes');

const atualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nome, email, cpf } = req.body;

    try {
        const clienteComMesmoEmailExiste = await buscarClientePorEmail(email);
        if (
            !!clienteComMesmoEmailExiste &&
            clienteComMesmoEmailExiste.id !== id
        ) {
            return res.status(400).json({
                mensagem: 'Já existe cliente cadastrado com o e-mail informado',
            });
        }

        const clienteComMesmoCpfExiste = await buscarClientePorCpf(cpf);
        if (!!clienteComMesmoCpfExiste && clienteComMesmoCpfExiste.id !== id) {
            return res.status(400).json({
                mensagem: 'Já existe cliente cadastrado com o CPF informado',
            });
        }

        const clienteAtualizado = await alterarCliente({
            id,
            nome,
            email,
            cpf,
        });

        return res.status(200).json(clienteAtualizado);
    } catch (error) {
        return res.status(500).json({ mensage: 'Erro Interno no Servidor' });
    }
};

module.exports = atualizarCliente;
