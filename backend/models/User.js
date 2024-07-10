const mongoose = require('mongoose');
const uri = "mongodb+srv://root:root@startupboard.sdn68ie.mongodb.net/?retryWrites=true&w=majority&appName=Startupboard";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connection successful to User database");
    } catch (e) {
        console.log("Connection failed");
    }
}

connect();

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['HR', 'manager', 'employee'], required: true },
});

module.exports = mongoose.model('User', UserSchema);
