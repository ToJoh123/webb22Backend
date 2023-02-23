const express = require('express');
// Ger mig access till .env filen
// Importerar och anropar config på samma gång.
require('dotenv').config();
const server = express();
// Används för att kunna ta emot JSON.
server.use(express.json());

// Hämtar in mysql paketet som vi använder för att skapa en ansluting till vår databas!
const mysql = require('mysql2');
// Hämtar info från våran .env fil, används för att skapa en anslutning
const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE
};

// Skapar en pool som vi kan återanvända
const pool = mysql.createPool(config);

server.post('/register', (req, res) => {

    // Hämtar username och password från bodyn.
    const {username, password} = req.body;

    // Skapar en SQL query med username och password.
    const sql = `
    INSERT INTO users(username, passwrod)
    VALUES('${username}', '${password}')`;

    // Skapar en query
    pool.query(sql, (error, result) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(result);
            res.json(result);
        }

    console.log(sql);
    })


    // const startTid = Date.now();
    // pool.query('DO SLEEP(3)', (error, result) => {
    //     const endTime = Date.now();
    //     console.log(endTime - startTid);
    // });
    // res.sendStatus(200);
});

server.post('/login', (req, res) => {
    const {username, password} = req.body;

    const sql = `
    SELECT * FROM users`;

    pool.execute(sql,[username, password], (error, result) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(result);
            res.json(result);
        }
    });

    console.log(sql);
})

server.listen(5050);

// SELECT * FROM users WHERE username='metin' AND passwrod='123'
// SELECT * FROM users WHERE username='metin' AND passwrod='123' OR 1=1