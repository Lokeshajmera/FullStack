const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// GET all faculty
router.get('/', async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.json(faculty);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new faculty (for seeding/admin)
router.post('/', async (req, res) => {
    const faculty = new Faculty({
        name: req.body.name,
        designation: req.body.designation,
        qualification: req.body.qualification,
        image: req.body.image,
        linkedin: req.body.linkedin
    });

    try {
        const newFaculty = await faculty.save();
        res.status(201).json(newFaculty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
