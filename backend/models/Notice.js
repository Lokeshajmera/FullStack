const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    link: { type: String }, // PDF link or external link
    content: { type: String }, // Optional description
}, { timestamps: true });

module.exports = mongoose.model('Notice', NoticeSchema);
