const express = require('express');

const { Inquiry } = require('./../../database/models/inquiry');

const inquiryRouter = express.Router();

inquiryRouter.get('/new', (req, res) => {
    const inq = new Inquiry({
        email: 'tester@gmail.com',
        businessType: 'fitness app',
        businessDescription: null,
        request: 'this is the thing that I would really like done.',
    });
    inq.save().then((savedInq) => {
        res.send(savedInq).status(200);
    });
});

module.exports = { inquiryRouter };
