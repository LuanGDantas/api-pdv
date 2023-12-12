const { PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const s3 = require('../config/aws_sdk_configurado');

const enviarArquivos = async (path, buffer, mimetype) => {
    const commando = new PutObjectCommand({
        Bucket: process.env.BLACKBLAZE_BUCKET,
        Key: path,
        Body: buffer,
        ContentType: mimetype,
    });

    await s3.send(commando);

    return `${process.env.URL_ENDPOINT}/${
        process.env.BLACKBLAZE_BUCKET
    }/${encodeURIComponent(path)}`;
};

const deletarArquivo = async path => {
    const commando = new DeleteObjectCommand({
        Bucket: process.env.BLACKBLAZE_BUCKET,
        Key: path,
    });
    const result = await s3.send(commando);
    console.log(result);
};

module.exports = {
    enviarArquivos,
    deletarArquivo,
};
