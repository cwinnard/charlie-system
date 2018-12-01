const express = require('express');

const { Inquiry } = require('./../../database/models/inquiry');

const inquiryRouter = express.Router();

inquiryRouter.post('/new', (req, res) => {
    console.log(req);
    const inq = new Inquiry({
        email: req.body.email,
        businessType: req.body.businessType,
        businessDescription: req.body.businessDescription,
        request: req.body.request,
    });
    inq.save().then((savedInq) => {
        res.send(savedInq).status(200);
    }, (e) => {
        res.send(e).status(500);
    });
});

module.exports = { inquiryRouter };
