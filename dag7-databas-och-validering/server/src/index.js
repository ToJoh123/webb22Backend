const express = require('express');
const server = express();
const mysql = require('mysql2');

const config = {
    user: 'root',
    password: 'rootroot',
    host: '127.0.0.1',
    database: 'nackademin'
};

const pool = mysql.createPool(config);

server.get('/', (req, res) => {
    pool.execute('SELECT * FROM users WHERE username=?', ['metin'] ,(error, result) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.json(result);
        }
    })

});

server.listen(5050);