const express = require('express');
const server = express();
const cors = require('cors');
const { friendRoute } = require('./routes/friendRoute');
const { authenticationRoute } = require('./routes/authenticationRoute');
const cookieParser = require('cookie-parser');

// express.json() gör samma sak som vi gjorde i våran egna middleware.
server.use(express.json());
server.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));
server.use(cookieParser());

server.use('/authentication',authenticationRoute);
server.use('/friends',checkAuthentication, friendRoute);

function checkAuthentication(req, res, next){
    const authToken = req.cookies.authToken;

    if (authToken === 'super-secret-auth-key') {
        next();
        return;
    }

    res.status(403).send('Youre not my friend, bring a better cookie next time');
};


server.listen(5050);