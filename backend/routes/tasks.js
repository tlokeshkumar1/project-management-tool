const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, description, deadline, employee, project } = req.body;
    const task = new Task({ name, description, deadline, employee, project });
    await task.save();
    res.status(201).json({ message: 'Task created successfully' });
});

router.get('/:projectId', async (req, res) => {
    const tasks = await Task.find({ project: req.params.projectId }).populate('employee');
    res.json(tasks);
});

module.exports = router;
