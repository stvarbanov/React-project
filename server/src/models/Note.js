const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minlength: 6
    },
    state: {
        type: String,
        enum: ['To do', 'In progress', 'Done'],
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
}
);

const Note = mongoose.model('Note', noteSchema);
//TODO rename demo
module.exports = Note;