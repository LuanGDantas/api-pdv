require('dotenv').config();
const express = require('express');
const rotas = require('./rotas/rotas');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(rotas);

app.listen(port);
