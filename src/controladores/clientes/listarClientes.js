const { buscarClientes } = require('../../repositorios/clientes');

const listarClientes = async (req, res) => {
    try {
        const clientes = await buscarClientes();

        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(500).json({ mensage: 'Erro Interno no Servidor' });
    }
};

module.exports = listarClientes;
