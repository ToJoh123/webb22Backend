const express = require('express');
const server = express();

const middlewares = [firstMiddleware, secondMiddleware, thirdMiddleware];

server.get('/' , middlewares, (req, res) => {
    res.send('Jag tog emot din request');
});


function firstMiddleware(req, res, next){
    console.log('I am the first middleware');
    next();
}
function secondMiddleware(req, res, next){
    console.log('I am the second middleware');
    next();
}
function thirdMiddleware(req, res, next){
    console.log('I am the third middleware');
    next();
}

server.listen(5050);