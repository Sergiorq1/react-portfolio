// server/index.js
const path = require('path');
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
const PORT = process.env.PORT || 3080;
const app = express();

// Email logic
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  },
});

/*
let mailOptions = {
  from: "test@gmail.com",
  to: process.env.GMAIL_USER,
  subject: "Nodemailer API",
  text: "Hi from your nodemailer API",
 };

contactEmail.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});
*/

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.use(cors());

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const subject = req.body.subject;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: process.env.GMAIL_USER,
    subject: `<p>Subject: ${subject}</p>`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '/Users/sergiorodriguez-quiroz/dev/Make_School/Classes/React/my-app/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/Users/sergiorodriguez-quiroz/dev/Make_School/Classes/React/my-app/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});