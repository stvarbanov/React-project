const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    myPosts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Note'

        }
    ],

});

userSchema.pre('save', function (next) {
    return bcrypt.hash(this.password, salt)
        .then((hash) => {
            this.password = hash;

            return next();
        })
});

userSchema.methods.passValidate = function (password) {
    return bcrypt.compare(password, this.password)
};

const User = mongoose.model('User', userSchema);

module.exports = User;