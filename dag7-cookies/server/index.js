const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors(
    {
        origin: 'http://localhost:5500',
        credentials: true
    }
));

server.get('/', (req, res) => {

    res.cookie('serversCookie', 'I belong to the server!', {
        maxAge: 3 * 999999999999999,
        httpOnly: true,
    });
    console.log(req.headers);
    res.sendStatus(200);
});

server.listen(5050);