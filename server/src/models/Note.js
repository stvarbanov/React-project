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
    },
    color:{
        type: String,
        required:true
    }
}, {
    timestamps: true
}
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;