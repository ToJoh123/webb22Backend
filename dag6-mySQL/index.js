const express = require('express');
// Ger mig access till .env filen
// Importerar och anropar config på samma gång.
require('dotenv').config();
const server = express();

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

server.get('/', (req, res) => {
    const startTid = Date.now();
    pool.query('DO SLEEP(3)', (error, result) => {
        const endTime = Date.now();
        console.log(endTime - startTid);
    });
    res.sendStatus(200);
});

server.listen(5050);