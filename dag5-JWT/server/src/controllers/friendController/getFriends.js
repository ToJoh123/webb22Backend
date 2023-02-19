const { users } = require("../../database");

exports.getFriends = function getFriends(req, res) {
    console.log(req.user);
    const {username} = req.user;
    const foundUser = users.find(currentUser => currentUser.username === username);

    if (!foundUser) {
        res.status(404).send('Didnt find any user with that username');
        return;
    }

    //.json konverterar till JSON OCH skickar det.
    res.status(200).json(foundUser.friends);
}