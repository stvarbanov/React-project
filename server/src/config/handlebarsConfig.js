const path = require('path');

const handlebars = require('express-handlebars');

function hbsConfig(app) {
    
     //views/layout/main.hbs

    app.set('views', path.resolve(__dirname, '../views'));

    app.engine('hbs', handlebars({
        extname: 'hbs',
    }));

    app.set('view engine', 'hbs');
}

module.exports = hbsConfig;