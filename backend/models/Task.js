const mongoose = require('mongoose');
const uri = "mongodb+srv://root:root@startupboard.sdn68ie.mongodb.net/?retryWrites=true&w=majority&appName=Startupboard";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connection successful to Task database");
    } catch (e) {
        console.log("Connection failed");
    }
}

connect();

const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

module.exports = mongoose.model('Task', TaskSchema);
