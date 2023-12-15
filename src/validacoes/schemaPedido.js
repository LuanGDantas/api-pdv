const joi = require('joi');

const schemaPedido = joi.object({
    cliente_id: joi.number().integer().positive().required().messages({
        'any.required': 'O campo ID do cliente é obrigatório',
        'number.base':
            'O campo ID do cliente é obrigatório e deve ser um número inteiro positivo, referente a um cliente existente',
        'number.positive':
            'O campo ID da cliente é obrigatório e deve ser um número inteiro positivo, referente a um cliente existente',
    }),

    observacao: joi.string().allow('', null).messages({
        'string.base': 'O campo observação deve ser uma string',
    }),

    pedido_produtos: joi
        .array()
        .items(
            joi.object({
                produto_id: joi
                    .number()
                    .integer()
                    .positive()
                    .required()
                    .messages({
                        'any.required':
                            'O campo ID de produto é obrigatório e deve ser um número inteiro positivo, referente a um produto existente',
                        'number.base':
                            'O campo ID da produto deve ser um número inteiro positivo, referente a um produto existente',
                        'number.positive':
                            'O campo ID da produto deve ser um número inteiro positivo, referente a um produto existente',
                    }),
                quantidade_produto: joi
                    .number()
                    .integer()
                    .positive()
                    .required()
                    .messages({
                        'any.required':
                            'O campo quantidade de produto é obrigatório e deve ser um número inteiro positivo',
                        'number.base':
                            'O campo quantidade de produto deve ser um número inteiro positivo',
                        'number.positive':
                            'O campo quantidade de produto deve ser um número inteiro positivo',
                    }),
            }),
        )
        .min(1)
        .required()
        .messages({
            'any.required':
                'O pedido deve conter ao menos um produto vinculado. Informe os produtos do pedido no campo "pedido_produtos" em forma de uma coleção (array) de objetos com as propriedades, ID do produto (produto_id) e quantidade do produto (quantidade_produto)',
            'array.base':
                'O campo "pedido_produtos" deve ser uma coleção (array) de objetos com as propriedades, ID do produto (produto_id) e quantidade do produto (quantidade_produto)',
            'array.includes':
                'O campo "pedido_produtos" deve ser uma coleção (array) de objetos com as propriedades, ID do produto (produto_id) e quantidade do produto (quantidade_produto)',
            'array.min':
                'O pedido deve conter ao menos um produto vinculado. Informe os produtos do pedido no campo "pedido_produtos" em forma de uma coleção (array) de objetos com as propriedades, ID do produto (produto_id) e quantidade do produto (quantidade_produto)',
        }),
});

module.exports = schemaPedido;
