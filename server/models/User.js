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

    registrationDate: {
        type: String,
    },

    age: {
        type: Number,
        min: 10,
        max: 90
    },

    height: {
        type: Number
    },

    weight: {
        type: Number
    },

    workouts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Workout'
    }]

});

module.exports = mongoose.model('User', userSchema)