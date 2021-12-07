const router = require('express').Router();

const authController = require('./controllers/authController');
const notesController = require('./controllers/notesController');

router.use('/auth', authController);
router.use('/notes', notesController);

module.exports = router;