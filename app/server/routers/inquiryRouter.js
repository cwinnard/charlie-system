const express = require('express');

const { Inquiry } = require('./../../database/models/inquiry');

const inquiryRouter = express.Router();

inquiryRouter.get('/new', (req, res) => {
    const user = new Inquiry({
        email: 'newuser@gmail.com',
    });
    user.save().then((doc) => {
        res.send(doc.email).status(200);
    });
});

module.exports = { inquiryRouter };
