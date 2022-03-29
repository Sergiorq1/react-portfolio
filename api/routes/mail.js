const emailController = require('../controllers/emailController');

function Emails() {
    emailController.connectEmail;
    emailController.verifyConnection;
}

module.exports = { Emails }, emailController.connectEmail;
