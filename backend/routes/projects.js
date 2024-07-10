const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, description, deadline, manager } = req.body;
    const project = new Project({ name, description, deadline, manager });
    await project.save();
    res.status(201).json({ message: 'Project created successfully' });
});

router.get('/', async (req, res) => {
    const projects = await Project.find().populate('manager');
    res.json(projects);
});

module.exports = router;
