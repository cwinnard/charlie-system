const bodyParser = require('body-parser');
const express = require('express');

require('../database/connect');
const { User } = require('../database/models/user');

const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '1000kb'}));

app.get('/', (req, res) => {
	res.send('hello world').status(200);
});

app.get('/test', (req, res) => {
	const user = new User({
		email: 'ctwinnard@gmail.com',
	});
	user.save().then((doc) => {
		res.send(doc.email).status(200);
	});
});

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});

module.exports = { app };
