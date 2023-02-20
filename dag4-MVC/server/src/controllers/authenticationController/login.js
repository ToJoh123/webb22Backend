const { users } = require("../../../database");

exports.login = function login(req, res) {
    const {username, password} = req.body;

    const foundUser = users.find(currentUser => currentUser.password === password && currentUser.username === username);

    if (foundUser) {
        res.cookie('authToken', 'super-secret-auth-key', {
            maxAge: 360000,
            sameSite: 'none',
            httpOnly: true
        });       
        res.status(200).send('Good login');
        return;
    }

    res.status(401).send('Invalid username/password');
}