const verificarClienteExiste = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (id == null) {
            return res
                .status(400)
                .json({ mensagem: 'É obrigatorio informar o id do cliente!' });
        }

        const existeCliente = await buscarClientePorId({ id });

        if (!existeCliente) {
            return res
                .status(400)
                .json({ mensagem: 'Cliente não encontrado!' });
        }
        req.cliente = existeCliente;
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = verificarClienteExiste
