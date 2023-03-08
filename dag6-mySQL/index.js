const express = require('express');
// Ger mig access till .env filen
// Importerar och anropar config på samma gång.
require('dotenv').config();
const server = express();
// Används för att kunna ta emot JSON.
server.use(express.json());

// Importerar bcrypt
const bcrypt = require('bcrypt');

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

    // const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Skapar en SQL query med username och password.
    const sql = `
    INSERT INTO users(username, password)
    VALUES(?, ?)`;

    // Skapar en query med prepared statements.
    pool.execute(sql, [username, hashedPassword], (error, result) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(result);
            res.json(result);
        }
    })
});

server.post('/login', (req, res) => {
    const {username, password} = req.body;

    const getPassword = `
    SELECT password FROM users WHERE username=?`;

    pool.execute(getPassword, [username],  (error, result) => {
        if (error) {
            console.log(error)
            res.sendStatus(500);
        } else {
            const storedPassword = result[0].password;
            
            const isEqual = bcrypt.compareSync(password, storedPassword)
            
            if (isEqual) {
                res.sendStatus(200);
            } else {
                res.sendStatus(401);
            }
        }
    })

    // const sql = `
    // SELECT * FROM users WHERE username=? AND password=?`;

    // pool.execute(sql,[username, password], (error, result) => {
    //     if (error) {
    //         console.log(error);
    //         res.sendStatus(500);
    //     } else {
    //         console.log(result);
    //         res.json(result);
    //     }
    // });

    // console.log(sql);
})

server.listen(5050);