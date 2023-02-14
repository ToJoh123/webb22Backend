const express = require('express');
const server = express();

server.use(myMiddleware);

server.get('/' , (req, res, next) => {
    console.log(req.query);
    console.log('I got a GET request, at the endpoint /');
    res.send('Jag tog emot din request');
});

server.post('/' , (req, res, next) => {
    console.log(req.body);
    res.send('Posted to /');
});

server.post('/user', (req, res, next) => {
    console.log(req.body);
    res.send('Posted to /user');
})

server.listen(5050);


function myMiddleware(req, res, next){
    if (req.headers['content-type'] !== 'application/json') {
        console.log('The request body was not of type application/json. I will not process any JSON');
        next();
        return;
    }

    req.on('data', (chunk) => {
        const readableChunk = chunk.toString();
        const body = JSON.parse(readableChunk);
        req.body = body;
        next();
    })
}