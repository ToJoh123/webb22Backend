const express = require('express');
const server = express();
const mysql = require('mysql2');
const joi = require('joi');
server.use(express.json());

const config = {
    user: 'root',
    password: 'rootroot',
    host: '127.0.0.1',
    database: 'nackademin'
};

const pool = mysql.createPool(config);

server.get('/', (req, res) => {
    const schema = joi.object({
        username: joi.string().min(3).max(20).required()
    });

    const validation = schema.validate(req.query);

    if (validation.error) {
        return res.status(400).json(validation.error.details[0].message);
    }

    const {username} = validation.value;


    pool.execute('SELECT * FROM users WHERE username=?', [username] ,(error, result) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.json(result);
        }
    });
});

server.post('/', (req, res) => {
    const { username, password, email, favoriteCandy } = req.body;
    
    console.log(req.body);
    console.log({username, password, email, favoriteCandy});

    const schema = joi.object({
        username: joi.string().min(3).max(20).required(),
        password: joi.string().min(3).max(15).required(),
        email: joi.string().email().required(),
        favoriteCandy: joi.string()
    });

    const validation = schema.validate(req.body);
})

server.listen(5050);