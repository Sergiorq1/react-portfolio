//imports
const path = require('path');
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
const PORT = process.env.PORT || 465;
const HOST = process.env.HOST || 'smtp.zoho.com';
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// Email logic

// makes connection to nodemailer from personal email
const connectEmail = nodemailer.createTransport({
  type: "OAuth2",
  host: HOST,
  port: PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

//verifies if connection to my email is there
connectEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post('/contact', (req, res) =>{
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
          res.json({error});
          console.log('Failed to send :(')
      } else {
          console.log('sent successfully')
          res.json({ status: "Message Sent"})
      }
  })    
});

// // // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../my-app/build')));

// Handle GET requests to /api route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});


// // All other GET requests not handled before will return our React app

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../my-app/build', 'index.html'));
// });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});