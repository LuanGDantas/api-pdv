const detalharCliente = async (req, res) => {
    return res.status(200).json(req.cliente);
};

module.exports = detalharCliente;
