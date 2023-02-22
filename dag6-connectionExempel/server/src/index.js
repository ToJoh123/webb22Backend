const mysql = require('mysql2');
require('dotenv').config();
const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
};
const express = require('express');
const server = express();


server.get('/', (req, res) => {
    // Sparar tiden just nu
    const startTime = Date.now();
    
    // Flytta ut connection & connect för att se tids skillnaden!
    // Skapar en connection.
    const connection = mysql.createConnection(config);
    // Upprätter en anslutning.
    connection.connect();
    
    // Kör en query
    connection.query("SELECT * FROM users", (error, result) => {
        // Skriver ut tiden just nu - den tidigare tiden. Alltså hur lång tid det tog att köra queryn, inklusive att sätta upp anslutningen.
        console.log(Date.now() - startTime);
    });
    res.sendStatus(200);
});

server.listen(5050);