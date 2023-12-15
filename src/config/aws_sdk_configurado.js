const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
    endpoint: process.env.URL_ENDPOINT,
    region: process.env.AWS_STOARGE_REGION,
    credentials: {
        accessKeyId: process.env.AWS_STOARGE_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_STORAGE_SECRET_ACCESS_KEY,
    },
});

module.exports = s3;
