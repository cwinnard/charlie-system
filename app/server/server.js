const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const { inquiryRouter } = require('./routers/inquiryRouter');

// Create app
const app = express();
const port = 3000;

// Configure app
app.use(bodyParser.json({ limit: '1000kb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'https://charlies-dev-shop.herokuapp.com',
    methods: ['GET', 'POST'],
}));

// Connect to database
require('../database/connect');

// Index
app.get('/', (req, res) => {
    res.send('hello world').status(200);
});

// Routers
app.use('/inquiry', inquiryRouter);

// Run app
app.listen(process.env.PORT || port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = { app };
