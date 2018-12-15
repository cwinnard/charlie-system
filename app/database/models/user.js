const mongoose = require('mongoose');

const { pages } = require('../../server/helpers/pageVisitsHelper');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    pagesVisited: {
        type: [String],
        required: false,
        default: [pages.LANDING, pages.DASHBOARD],
    },
});

const User = mongoose.model('user', userSchema);

module.exports = { userSchema, User };
