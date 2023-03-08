const { users } = require("../../../database");
// Används för att kryptera/dekryptera.
const jwt = require('jsonwebtoken');
// Används för att få åtkomst till .env-filen.
const dotenv = require('dotenv');
dotenv.config();

exports.login = function login(req, res) {
    const secret = process.env.SECRET;
    const {username, password} = req.body;

    const foundUser = users.find(currentUser => currentUser.password === password && currentUser.username === username);

    
    if (foundUser) {
        // Vi vill inte ta bort password och friends från användaren i våran "users" array.
        // Därför skapar vi en kopia av användaren, och tar bort nycklarna från kopian.
        const copyOfUser = {...foundUser};
        delete copyOfUser.password;
        delete copyOfUser.friends;

        const authToken = jwt.sign(copyOfUser, secret, {expiresIn: 120});

        res.cookie('authToken', authToken, {
            maxAge: 360000,
            sameSite: 'none',
            // Secure är just nu buggat för Postman, använd inte secure: true för Postman.
            // secure: true,
            httpOnly: true
        });       
        res.status(200).send('Good login');
        return;
    }

    res.status(401).send('Invalid username/password');
}