const { getRender } = require('./templates');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, //process.env.EMAIL_SSL,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: process.env.EMAIL_REJECT_UNAUTHORIZED
    }
});

transporter.verify( (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('smtp email server is ready');
    }
});

exports.email = async (data) => {
    try {
        const email = {
            from: `"${data.name}" <${data.email}>`,
            to: data.to,
            subject: data.subject,
            html: await getRender(data.context)
        };
        return await transporter.sendMail(email);
    } catch (error) {
        return Promise.reject(error);
    }
};
