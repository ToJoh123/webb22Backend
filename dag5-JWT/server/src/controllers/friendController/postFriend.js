const { users } = require("../../../database");

exports.postFriend = function postFriend(req, res){
    // Hämtar användarnamnet från loggedInUser objektet som ligger i vår request.
    const {username} = req.loggedInUser;
    const {friend} = req.body;

    const userIndex = users.findIndex(currentUser => currentUser.username === username);

    if (userIndex === -1) {
        res.status(404).send('Couldnt find a registered user with the given name');
        return;
    }

    users[userIndex].friends.push(friend);
    res.status(200).send('Added a friend to your user!');
}