const bodyParser = require('body-parser');
const express = require('express');

const { User } = require('../database/models/user');
const { usersRouter } = require('./routers/usersRouter');

// Create app
const app = express();
const port = 3000;

// Configure app
app.use(bodyParser.json({limit: '1000kb'}));

// Connect to database
require('../database/connect');

// Index
app.get('/', (req, res) => {
	res.send('hello world').status(200);
});

// Routers
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});

module.exports = { app };
