import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you import the CSS file

function Navbar() {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href = '/login';
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                {(userRole === 'HR' || userRole === 'manager' || userRole === 'employee') && <li><Link to="/dashboard">Home</Link></li>}
                {(userRole === 'HR' || userRole === 'manager' || userRole === 'employee') && <li><Link to="/projects">Projects</Link></li>}
                {userRole === 'HR' && <li><Link to="/create-project">Create Project</Link></li>}
                {(userRole === 'HR' || userRole === 'manager') && <li><Link to="/create-task">Create Task</Link></li>}
                {!token && <li><Link to="/login">Login</Link></li>}
                {!token && <li><Link to="/register">Register</Link></li>}
                {token && <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li>}
            </ul>
            <div className="nav-title">
                Project Management Tool
            </div>
        </nav>
    );
}

export default Navbar;
