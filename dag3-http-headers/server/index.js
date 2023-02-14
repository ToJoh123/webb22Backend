const http = require('http');
const {users} = require('./database/database');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    if (req.method === 'POST') {
        req.on('data', (chunk) => {
            const body = JSON.parse(chunk.toString());

            const {username, password} = body;

            users.push({username, password});

            res.statusCode = 201;
            res.end('Registrerade en användare!');
            console.log(users);
        })
    }
});

server.listen(5050);