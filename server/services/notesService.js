
const Note = require('../models/Note.js');
const User = require('../models/User');
const mongoose = require('mongoose');
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
const getAllToDos = async () => await Note.find({ state: 'To Do' }).populate('owner');
const getInProgress = async () => await Note.find({ state: 'In Progress' }).populate('owner');
const getAllDone = async () => await Note.find({ state: 'Done' }).populate('owner');
const getNoteById = async (noteId) => await Note.findById(noteId).populate('owner');
const getNotesOfUser = async (userId) => {

    var id = mongoose.Types.ObjectId(userId);
    return await Note.find({ owner: id });

}
const getUsers = async () => await User.find().populate('notes');
const updateNoteById = async (noteId, state) => {
    const note = await Note.findById(noteId);
    note.state = state;
    return note.save();

}
module.exports = {
    createNote,
    getAllToDos,
    getInProgress,
    getAllDone,
    getNoteById,
    getNotesOfUser,
    getUsers,
    updateNoteById

}