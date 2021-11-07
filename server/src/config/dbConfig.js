const mongoose = require('mongoose');
const { DB_CONN_STRING } = require('../constants.js');

function initDatabase() {

    return mongoose.connect(DB_CONN_STRING);

}

module.exports = initDatabase;