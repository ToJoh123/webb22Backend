const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

server.get('/', (req, res) => {
    setTimeout(() => {
        res.status(200).send('Här är min respons');
    }, 3000);
});

server.listen(5050);