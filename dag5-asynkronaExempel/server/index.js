const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());


server.get('/', (req, res) => {
    // Väntar i 5 sekunder, och skickar sedan en respons.
    setTimeout(() => {
        res.send('Here is your response!');
    }, 5000);
});

server.listen(5050);