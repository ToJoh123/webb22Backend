const { users } = require("../../database");
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

exports.login = function login(req, res) {
    const {username, password} = req.body;

    const foundUser = users.find(currentUser => currentUser.password === password && currentUser.username === username);
    if (! foundUser) {
        return res.sendStatus(401);
    }

    // Skapar en kopia av foundUser.
    const userWithoutPassword = {...foundUser};
    // Tar bort password från kopian. Detta är för att vi inte vill ta bort password från orginalet, som ligger i arrayen "users".
    delete userWithoutPassword.password;


    // Krypterar vårat userWithPassword objekt med hjälp av våran secret och JWT.
    const authToken =  jwt.sign(userWithoutPassword, secret, {expiresIn: 10});

    // Sätter en cookie som heter authToken, och har värdet av våran krypterade token.
    res.cookie('authToken', authToken, {
        maxAge: 600000,
    });       

    res.sendStatus(200)
}