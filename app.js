const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./backend/routes/auth');
const projectRoutes = require('./backend/routes/projects');
const taskRoutes = require('./backend/routes/tasks');

const uri = "mongodb+srv://root:root@startupboard.sdn68ie.mongodb.net/?retryWrites=true&w=majority&appName=Startupboard";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connection successful to database's");
    } catch (e) {
        console.log("Connection failed");
    }
}

connect();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(8000, () => 
    console.log("Server is running on port 8000")
);
