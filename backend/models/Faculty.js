const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    qualification: { type: String, required: true },
    image: { type: String, required: false }, // URL to image
    linkedin: { type: String },
    areaOfInterest: { type: String },
    experience: { type: String },
    website: { type: String },
    email: { type: String },
    scopus: { type: String },
    wos: { type: String },
    googleScholar: { type: String }
});

module.exports = mongoose.model('Faculty', FacultySchema);
