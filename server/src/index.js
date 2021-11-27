const express = require('express');
const routes = require('./routes.js')
const { PORT } = require('./constants.js');
const initDatabase = require('./config/dbConfig.js')
const app = express();

//require('./config/expressConfig.js')(app);
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


const cors = require('cors');
app.use(cors());
    
app.use(routes);

initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`));
    }).catch(err => {
        console.log('Database error: ', err);
    })

