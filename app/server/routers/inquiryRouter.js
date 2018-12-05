const express = require('express');

const { Inquiry } = require('./../../database/models/inquiry');

const inquiryRouter = express.Router();

inquiryRouter.post('/new', (req, res) => {
    const inq = new Inquiry({
        username: req.body.username,
        email: req.body.email,
        businessType: req.body.businessType,
        businessDescription: req.body.businessDescription,
        request: req.body.request,
    });
    inq.save().then(() => {
        res.sendStatus(200);
    }, (e) => {
        res.send(e).status(500);
    });
});

module.exports = { inquiryRouter };
