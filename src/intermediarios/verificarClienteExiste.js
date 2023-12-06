const { buscarClientePorId } = require('../repositorios/clientes');

const verificarClienteExiste = async (req, res, next) => {
    const id = Number(req.params.id);
    try {
        if (isNaN(id)) {
            return res.status(400).json({
                mensagem:
                    'É obrigatorio informar o id do cliente e deve ser um número',
            });
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
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro Interno do Servidor' });
    }
};

module.exports = verificarClienteExiste;
