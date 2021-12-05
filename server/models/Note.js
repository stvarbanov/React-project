const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    state:{
        type: String,
        enum: ['To Do', 'In Progress', 'Done'],
        required: true
    },
    color: {
        type: String,
        required: true
    },
    owner: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'

        }
    ],

}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', noteSchema);