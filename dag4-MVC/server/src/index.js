
// Login
// Sätt en cookie

// Registrering

//CRUD Friends -U
// Skyddad route, måste vara autentiserad (middleware check cookie).

const express = require('express');
const server = express();
const cors = require('cors');
const {users} = require('../database');

// express.json() gör samma sak som vi gjorde i våran egna middleware.
server.use(express.json());
server.use(cors());

server.post('/register', (req, res) => {
    users.push(req.body);
    res.status(201).send('Added user');
})

server.post('/login', (req, res) => {
    const {username, password} = req.body;

    const foundUser = users.find(currentUser => currentUser.password === password && currentUser.username === username);

    if (foundUser) {
        res.status(200).send('Good login');
        return;
    }

    res.status(401).send('Invalid username/password');
})



server.listen(5050);