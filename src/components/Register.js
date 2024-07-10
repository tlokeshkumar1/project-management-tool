import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email !== confirmEmail) {
            alert('Emails do not match');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            await axios.post('http://localhost:8000/api/auth/register', { username, email, password, role });
            window.location.href = '/login';
        } catch (error) {
            console.error('Registration failed');
        }
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Confirm Email" 
                    value={confirmEmail} 
                    onChange={(e) => setConfirmEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled>Choose the Role</option>
                    <option value="HR">HR</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
