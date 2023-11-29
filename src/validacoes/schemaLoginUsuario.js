const joi = require('joi');

const schemaLoginUsuario = joi.object({
    email: joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido',
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório',
        'string.base': 'O campo email é obrigatório e deve ser uma string.',
    }),
    senha: joi.string().required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.base': 'O campo senha é obrigatório e deve ser uma string.',
    }),
});

module.exports = schemaLoginUsuario;
