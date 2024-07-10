import React, { useState } from 'react';
import axios from 'axios';
import './ProjectForm.css';

function ProjectForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [manager, setManager] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/projects', {
                name,
                description,
                deadline,
                manager
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Project created successfully!');
            setName('');
            setDescription('');
            setDeadline('');
            setManager('');
        } catch (error) {
            console.error('Error creating project:', error);
            alert('Failed to create project');
        }
    };

    return (
        <form className="project-form" onSubmit={handleSubmit}>
            <h2>Create Project</h2>
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
                Manager:
                <input type="text" value={manager} onChange={(e) => setManager(e.target.value)} required />
            </label>
            <button type="submit">Create Project</button>
        </form>
    );
}

export default ProjectForm;
