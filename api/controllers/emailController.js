const nodemailer = require("nodemailer");

// makes connection to nodemailer from personal email
const connectEmail = nodemailer.createTransport({
    service: 'gmail',
    port: 3080,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
});

//verifies if connection to my email is there
const verifyConnection = connectEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});

function sendInfo (req, res) {
    const name = req.body.mailerState.name;
    const subject = req.body.mailerState.subject;
    const email = req.body.mailerState.email;
    const message = req.body.mailerState.message; 
    let mail = {
        from: name,
        to: process.env.GMAIL_USER,
        subject: subject,
        html: `Name: ${name}
               Email: ${email}
               Message: ${message}`
    }
    connectEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR"});
            console.log('Failed to send :(')
        } else {
            console.log('sent successfully')
            res.json({ status: "Message Sent"})
        }
    })
}

module.exports = {
    connectEmail,
    verifyConnection,
    sendInfo
};