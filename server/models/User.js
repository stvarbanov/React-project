const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    color:{
        type: String,
        required: true,
    },
    notes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Note'
    }]

});

module.exports = mongoose.model('User', userSchema)