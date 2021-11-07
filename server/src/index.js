const express = require('express');
const routes = require('./routes.js')
const { PORT } = require('./constants.js');
const initDatabase = require('./config/dbConfig.js')

const app = express();

require('./config/expressConfig.js')(app);
require('./config/handlebarsConfig.js')(app);

app.use(routes);

initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`));
    }).catch(err => {
        console.log('Database error: ', err);
    })

