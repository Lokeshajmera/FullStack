const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String }, // e.g., 'SDW', 'GeeksforGeeks'
    image: { type: String }, // URL to image
    linkedin: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('Student', StudentSchema);
