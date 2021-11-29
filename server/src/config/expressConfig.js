const cookieParser = require('cookie-parser');
// const { auth } = require('../middleware/authMiddle.js');
const bodyParser = require('body-parser');
const cors = require('cors')



function expressConfig(app) {

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(cors());

    // app.use(auth());

}

module.exports = expressConfig;