const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET all students
router.get('/', async (req, res) => {
    try {
        const query = {};
        if (req.query.department) {
            query.department = req.query.department;
        }
        const students = await Student.find(query);
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new student (for seeding/admin)
router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        role: req.body.role,
        department: req.body.department,
        image: req.body.image,
        linkedin: req.body.linkedin,
        email: req.body.email
    });

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
