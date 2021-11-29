const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const authController = require('./controllers/authController.js');
const notesController = require('./controllers/notesController.js');


//all request go through:
router.use('/',homeController);
router.use('/auth', authController);
router.use('/notes', notesController);
// router.use('*', (req, res) => res.render('404'));


//specific routes

module.exports = router;