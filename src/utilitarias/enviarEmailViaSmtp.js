const nodemailer = require('nodemailer');
const configEmail = require('../config/email');
const compilarTemplateHtml = require('./compilarTemplateHtml');

const cliente = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const enviarEmailViaSmtp = async ({ de, para, assunto, template, dados }) => {
    const { name, email } = configEmail.remetentePadrao;

    const html = await compilarTemplateHtml(template, dados);

    cliente.sendMail({
        from: {
            name: de.name || name,
            address: de.email || email,
        },
        to: {
            name: para.nome,
            address: para.email,
        },
        subject: assunto,
        html,
    });
};

module.exports = enviarEmailViaSmtp;
