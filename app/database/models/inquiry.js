const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: '',
    },
    email: {
        type: String,
        required: true,
        default: '',
    },
    businessType: {
        type: String,
        required: true,
        default: '',
    },
    businessDescription: {
        type: String,
        required: false,
    },
    request: {
        type: String,
        required: true,
        default: '',
    },
});

const Inquiry = mongoose.model('inquery', inquirySchema);

module.exports = { inquirySchema, Inquiry };
