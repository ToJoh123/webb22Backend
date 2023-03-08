const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

exports.checkAuthentication = function checkAuthentication(req, res, next){
    // Hämtar en "authToken" i våra cookies.
    const authToken = req.cookies.authToken;

    // Verifierear tokenen.
    // Det kan uppstå en error här, hantera det med try-catch.
    const loggedInUser = jwt.verify(authToken, secret);
    req.loggedInUser = loggedInUser;
    next();
};