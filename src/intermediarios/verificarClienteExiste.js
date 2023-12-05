const { buscarClientePorId } = require('../repositorios/clientes');

const verificarClienteExiste = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (id == null) {
            return res
                .status(400)
                .json({ mensagem: 'É obrigatorio informar o id do cliente!' });
        }

        const existeCliente = await buscarClientePorId(id);

        if (!existeCliente) {
            return res
                .status(400)
                .json({ mensagem: 'Cliente não encontrado!' });
        }
        req.cliente = existeCliente;

        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro Interno do Servidor' });
    }
};

module.exports = verificarClienteExiste;
