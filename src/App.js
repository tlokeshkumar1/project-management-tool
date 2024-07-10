import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';
import ProjectForm from './components/ProjectForm';
import TaskForm from './components/TaskForm';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
    const role = localStorage.getItem('role');

    return (
        <div className="App">
            <Navbar />
            <Routes>
                {(role === 'HR' || role === 'manager' || role === 'employee') && <Route path="/dashboard" element={<Dashboard />} />}
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/tasks/:projectId" element={<TaskList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Navigate to="/login" />} />
                {role === 'HR' && <Route path="/create-project" element={<ProjectForm />} />}
                {(role === 'HR' || role === 'manager') && <Route path="/create-task" element={<TaskForm />} />}
            </Routes>
        </div>
    );
}

export default App;
