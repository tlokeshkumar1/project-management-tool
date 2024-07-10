import React, { useState } from 'react';
import axios from 'axios';
import './TaskForm.css';

function TaskForm({ projectId }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [employee, setEmployee] = useState('');
    const [project, setProject] = useState(projectId);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/tasks', {
                name,
                description,
                deadline,
                employee,
                project
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Task created successfully!');
            setName('');
            setDescription('');
            setDeadline('');
            setEmployee('');
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Failed to create task');
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Create Task</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Deadline:
                <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
            </label>
            <label>
                Employee:
                <input type="text" value={employee} onChange={(e) => setEmployee(e.target.value)} required />
            </label>
            <label>
                Project:
                <input type="text" value={project} onChange={(e) => setProject(e.target.value)} required />
            </label>
            <button type="submit">Create Task</button>
        </form>
    );
}

export default TaskForm;
