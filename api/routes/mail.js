const express = require('express');
const emailController = require('../controllers/emailController');

function Emails() {
    emailController.connectEmail;
    emailController.verifyConnection;
    emailController.sendInfo;
}
module.exports = { Emails }