const { users } = require("../../../database");

exports.register = function register(req, res) {
    req.body.friends = [];
    users.push(req.body);
    res.status(201).send('Added user');
}