const mongoose = require('mongoose');

mongoose.connect('mongodb://system:1system@ds121624.mlab.com:21624/heroku_wvhr7trx', { useNewUrlParser: true });

module.exports = {};
