const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());


server.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Here is your response!');
    }, 5000);
});

server.listen(5050);