const bcrypt = require('bcrypt');
const User = require('../models/User');
// const userValidator = require('../validation/userValidation');
const { SALT_ROUNDS } = require('../config/config');

const register = async data => {
    // let username = userValidator.usernameValidation(data.username);
    // let email = userValidator.emailValidation(data.email).toLowerCase();
    // let password = userValidator.passwordValidation(data.password);
    let username = data.username;
    let email = data.email;
    let password = data.password;
    let color = data.color;

    if (password !== data.rePassword) {
        throw { errorMsg: 'Passwords must match!' };
    }

    const userByUsername = await User.findOne({ username });
    const userByEmail = await User.findOne({ email });

    if (userByUsername) {
        throw { errorMsg: 'There is already registered user with that username' };
    }

    if (userByEmail) {
        throw { errorMsg: 'There is already registered user with that email' };
    }

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hash, color });

    await newUser.save();

    return { user: newUser };
};

const login = async data => {
    // let email = userValidator.emailValidation(data.email);
    // let password = userValidator.passwordValidation(data.password);
    let username = data.username;
    let password = data.password;

    let errorMsg = 'Invalid username / password!';

    let user = await User.findOne({ username });
    if (!user) throw { errorMsg };

    let passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) throw { errorMsg };


    return { user };
};




module.exports = {
    register,
    login
}