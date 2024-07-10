import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TaskList() {
    const { projectId } = useParams();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get(`/api/tasks/${projectId}`);
            setTasks(response.data);
        };
        fetchTasks();
    }, [projectId]);

    return (
        <div className="task-list">
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
