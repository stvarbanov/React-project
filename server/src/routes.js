const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const authController = require('./controllers/authController.js');


//all request go through:
router.use('/api',homeController);
router.use('/auth', authController);
// router.use('/demo', demoController);
// router.use('*', (req, res) => res.render('404'));


//specific routes

module.exports = router;