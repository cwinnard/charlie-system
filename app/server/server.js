const bodyParser = require('body-parser');
const express = require('express');

const { usersRouter } = require('./routers/usersRouter');

// Create app
const app = express();
const port = 3000;

// Configure app
app.use(bodyParser.json({ limit: '1000kb' }));

// Connect to database
require('../database/connect');

// Index
app.get('/', (req, res) => {
    res.send('hello world').status(200);
});

// Routers
app.use('/users', usersRouter);

// Run app
app.listen(process.env.PORT || port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = { app };
