const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

exports.checkAuthentication = function checkAuthentication(req, res, next){
    const authToken = req.cookies.authToken;
    try {
        const verification = jwt.verify(authToken,secret);
        req.user = verification;
        next();
    } catch(error) {
        console.log(error.message);
        res.sendStatus(401);
    }
};