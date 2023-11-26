const knexConfigurado = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_NAME,
        ssl: { rejectUnauthorized: false },
    },
});

module.exports = knexConfigurado;