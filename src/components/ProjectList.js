import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
        };
        fetchProjects();
    }, []);

    return (
        <div className="project-list">
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
