const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        default: '',
    },
});

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };
