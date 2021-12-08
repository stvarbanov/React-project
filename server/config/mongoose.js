// const mongose = require('mongoose');
// const { DB_URI } = require('./config');

// const mongooseOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
// }

// mongose.connect(DB_URI, mongooseOptions);

// const db = mongose.connection;

// db.on('error', () => console.log('Connection error:'));
// db.once('open', () => console.log('DB connected...'));

// module.exports = db;