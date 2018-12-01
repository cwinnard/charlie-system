const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
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

const Inquiry = mongoose.model('clientInquery', inquirySchema);

module.exports = { inquirySchema, Inquiry };
