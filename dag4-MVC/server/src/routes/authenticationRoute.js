const express = require('express');
const { login } = require('../controllers/authenticationController/login');
const { register } = require('../controllers/authenticationController/register');
const authenticationRoute = express.Router();


authenticationRoute.post('/login', login);

authenticationRoute.post('/register', register);

exports.authenticationRoute = authenticationRoute;