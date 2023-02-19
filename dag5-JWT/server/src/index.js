const express = require('express');
const dontenv = require('dotenv').config();
const server = express();
const cors = require('cors');
const { friendRoute } = require('./routes/friendRoute');
const { authenticationRoute } = require('./routes/authenticationRoute');
const cookieParser = require('cookie-parser');
const { checkAuthentication } = require('./middlewares/checkAuthentication');

// express.json() gör samma sak som vi gjorde i våran egna middleware.
server.use(express.json());
server.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));
server.use(cookieParser());

server.use('/authentication', authenticationRoute);
server.use('/friends', checkAuthentication, friendRoute);

server.listen(5050);