const mongoose = require('mongoose');
const uri = "mongodb+srv://root:root@startupboard.sdn68ie.mongodb.net/?retryWrites=true&w=majority&appName=Startupboard";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connection successful to Projects database");
    } catch (e) {
        console.log("Connection failed");
    }
}

connect();

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = mongoose.model('Project', ProjectSchema);
