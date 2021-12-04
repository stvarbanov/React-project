const router = require('express').Router();

const authController = require('./controllers/authController');
const workoutController = require('./controllers/workoutController');

router.use('/auth', authController);
router.use('/workouts', workoutController);

module.exports = router;