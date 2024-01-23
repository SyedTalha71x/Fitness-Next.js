const mongoose = require('mongoose');
const { model } = mongoose;
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});


mongoose.models = {}
module.exports = mongoose.model('Notes', NotesSchema);