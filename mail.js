const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
       // api_key: 'Your MailGun API KEY',
       // domain: 'Your MailGun DOMAIN'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'marksonsea@gmail.com',
        subject: subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            cb(err,null);
        } else{
            cb(null, data);
        }
    });
}

module.exports = sendMail;