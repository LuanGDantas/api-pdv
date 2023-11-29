const detalharUsuario = (req, res) => {
    const { senha:_, ...usuario } = req.usuario;

    return res.status(200).json(usuario);
};

module.exports = detalharUsuario;
