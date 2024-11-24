const mongoose = require('mongoose');
const heroimageSchema = new mongoose.Schema({
    images: {
        type: [String], // Array of strings to store multiple image URLs/paths
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Heroimage = mongoose.model('Heroimage', heroimageSchema);
module.exports = Heroimage;