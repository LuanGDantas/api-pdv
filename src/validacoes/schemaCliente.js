const joi = require('joi');

const schemaCliente = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório',
        'string.base': 'O campo nome é obrigatório e deve ser uma string',
    }),

    email: joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido',
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório',
        'string.base': 'O campo email é obrigatório e deve ser uma string',
    }),

    cpf: joi.string().required().length(11).pattern(/^\d+$/).messages({
        'any.required': 'O campo CPF é obrigatório',
        'string.empty': 'O campo CPF é obrigatório',
        'string.base':
            'O campo CPF é obrigatório e deve ser uma string com os 11 dígitos (Ex.: 12345678901)',
        'string.length': 'O campo CPF deve ter 11 dígitos (Ex.: 12345678901)',
        'string.pattern.base':
            'O campo CPF deve conter apenas dígitos (Ex.: 12345678901)',
    }),

    cep: joi.string().length(8).pattern(/^\d+$/).allow('', null).messages({
        'string.base':
            'O campo CEP deve ser uma string com os 8 dígitos (Ex.: 59900000)',
        'string.length': 'O campo CEP deve ter 8 dígitos (Ex.: 59900000)',
        'string.pattern.base':
            'O campo CEP deve conter apenas dígitos (Ex.: 12345678901)',
    }),

    rua: joi.string().allow('', null),
    numero: joi.string().allow('', null),
    bairro: joi.string().allow('', null),
    cidade: joi.string().allow('', null),
    estado: joi.string().allow('', null),
});

module.exports = schemaCliente;
