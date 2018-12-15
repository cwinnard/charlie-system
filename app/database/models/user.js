const mongoose = require('mongoose');

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
        default: [],
    },
});

const User = mongoose.model('user', userSchema);

module.exports = { userSchema, User };
