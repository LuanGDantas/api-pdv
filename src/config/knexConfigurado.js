const knexConfigurado = require('knex')({
    client: process.env.BD_CLIENT,
    connection: {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_NAME,
        ssl: { rejectUnauthorized: false },
    },
});

module.exports = knexConfigurado;
