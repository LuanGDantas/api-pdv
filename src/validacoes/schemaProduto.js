const joi = require('joi');

const schemaProduto = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'O campo descrição é obrigatório',
        'string.empty': 'O campo descrição é obrigatório',
        'string.base': 'O campo descrição é obrigatório e deve ser uma string.',
    }),

    quantidade_estoque: joi.number().integer().positive().required().messages({
        'any.required': 'O campo quatidade de estoque é obrigatório',
        'number.base':
            'O campo quatidade de estoque deve ser um número inteiro positivo',
        'number.positive':
            'O campo quatidade de estoque deve ser um número inteiro positivo',
    }),

    valor: joi.number().integer().positive().required().messages({
        'any.required':
            'O campo valor é obrigatório e deve ser um número inteiro positivo, representado em centavos (Ex.: R$ 10,00 reais = 1000)',
        'number.base':
            'O campo valor deve ser um númerico inteiro positivo, representado em centavos (Ex.: R$ 10,00 reais = 1000)',
        'number.positive':
            'O campo valor deve ser um númerico inteiro positivo, representado em centavos (Ex.: R$ 10,00 reais = 1000)',
    }),

    categoria_id: joi.number().integer().positive().required().messages({
        'any.required':
            'O campo ID da categoria é obrigatório e deve ser um número inteiro positivo, referente a um categoria existente',
        'number.base':
            'O campo ID da categoria deve ser um número inteiro positivo, referente a um categoria existente',
        'number.positive':
            'O campo ID da categoria deve ser um número inteiro positivo, referente a um categoria existente',
    }),
});

module.exports = schemaProduto;
