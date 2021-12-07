const { json } = require('body-parser');
const Note = require('../models/Note.js');
const User = require('../models/User');
// const { nameValidation, numberValidation } = require('../validation/NotesValidation');

const createNote = async (title, userId) => {
    // let noteTitle = nameValidation(data.NoteName);

    const user = await User.findById(userId);

    let color = user.color;
    let owner = user.id;

    let note = new Note({
        title: title,
        state: "To Do",
        color,
        owner
    })

    user.notes.push(note._id);

    await user.save();

    return await note.save();
};



module.exports = {
    createNote
}