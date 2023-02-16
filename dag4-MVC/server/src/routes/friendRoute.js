const express = require('express');
const { getFriends } = require('../controllers/friendController/getFriends');
const { postFriend } = require('../controllers/friendController/postFriend');
const friendRoute = express.Router();


friendRoute.get('/', getFriends);

friendRoute.post('/', postFriend);

exports.friendRoute = friendRoute;