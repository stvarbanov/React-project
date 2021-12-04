const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');

module.exports = app => {
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(cors());

    app.use(auth());
}