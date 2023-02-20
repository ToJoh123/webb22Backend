const { users } = require("../../../database");

exports.postFriend = function postFriend(req, res){
    const {username, friend} = req.body;

    const userIndex = users.findIndex(currentUser => currentUser.username === username);

    if (userIndex === -1) {
        res.status(404).send('Couldnt find a registered user with the given name');
        return;
    }

    users[userIndex].friends.push(friend);
    res.status(200).send('Added a friend to your user!');
}