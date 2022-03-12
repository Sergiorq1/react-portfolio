const express = require('express');
const router  = express.Router();
const emailController = require('../controllers/emailController');


router.get('/contact', emailController.connectEmail);
router.get('/contact', emailController.verifyConnection);
router.post('/contact', emailController.sendInfo);