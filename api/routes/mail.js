// Email logic
const contactEmail = nodemailer.createTransport({
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
  
  
  // let mailOptions = {
  //   from: "test@gmail.com",
  //   to: process.env.GMAIL_USER,
  //   subject: "Nodemailer API",
  //   text: "Hi from your nodemailer API",
  //  };
  
  // contactEmail.sendMail(mailOptions, function (err, data) {
  //   if (err) {
  //     console.log("Error " + err);
  //   } else {
  //     console.log("Email sent successfully");
  //   }
  // });
  
  
contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});
  
  
  
app.post("/contact", (req, res) => {
    const name = req.body.mailerState.name;
    const subject = req.body.mailerState.subject;
    const email = req.body.mailerState.email;
    const message = req.body.mailerState.message; 
    let mail = {
      from: name,
      to: process.env.GMAIL_USER,
      subject:subject,
      html: `Name: ${name}
             Email: ${email}
             Message: ${message}`,
};
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
        console.log('Failed to send :(')
      } else {
        console.log('sent successfully')
        res.json({ status: "Message Sent" });
      }
    });
});