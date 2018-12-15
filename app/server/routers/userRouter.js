const express = require('express');

const { User } = require('./../../database/models/user');
const helper = require('../helpers/usersHelper');

const userRouter = express.Router();

userRouter.post('/new', (req, res) => {
    const username = req.body.username ? req.body.username : helper.generateUsername();
    const token = helper.generateJWT();
    const user = new User({
        username,
        token,
    });
    user.save().then(() => {
        res.sendStatus(200).header('x-auth', user.token);
    }, (e) => {
        res.send(e).status(500);
    });
});

module.exports = { userRouter };
