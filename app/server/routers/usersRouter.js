const express = require('express');

const { User } = require('./../../database/models/user');

const usersRouter = express.Router();

usersRouter.get('/new', (req, res) => {
    const user = new User({
        email: 'newuser@gmail.com',
    });
    user.save().then((doc) => {
        res.send(doc.email).status(200);
    });
});

module.exports = { usersRouter };
