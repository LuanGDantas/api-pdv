const { buscarClientePorId } = require('../../repositorios/clientes');
const { buscarPedidos } = require('../../repositorios/pedidos');

const listarPedidos = async (req, res) => {
    const { cliente_id } = req.query;

    try {
        if (cliente_id != null) {
            const clienteExiste = await buscarClientePorId(cliente_id);
            if (!clienteExiste) {
                return res
                    .status(404)
                    .json({ mensagem: 'Cliente não encontrado' });
            }

            const pedidos = await buscarPedidos({ cliente_id });

            return res.status(200).json(pedidos);
        }

        const pedidos = await buscarPedidos();

        return res.status(200).json(pedidos);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro Interno do Servidor' });
    }
};

module.exports = listarPedidos;
