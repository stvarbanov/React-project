const jwt = require('../utils/jwt.js');

const { JWT_SECRET } = require('../constants.js');

const User = require('../models/User.js');

exports.login = async ({ username, password }) => {


  

    //check if user exists
    let user = await User.findOne({ username });

    if (!user) {
        throw new Error('User not found');
    }

    //check if the password match in the db
    let isValid = await user.passValidate(password);

    if (!isValid) {
        throw new Error('Invalid username or password');
    }

    //create token - minimal data, not whole User.
    let payload = {
        _id: user._id,
        email: user.email,
        username: user.username

    }
   
    let token = await jwt.sign(payload, JWT_SECRET);
   
    return token;

};
exports.register = async (userData) => {

    await User.create(userData);

};