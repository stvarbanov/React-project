const router = require('express').Router();

const workoutService = require('../services/workoutsService');

router.post('/create/:userId', (req, res) => {
    workoutService.create(req.body, req.params.userId)
        .then(data => {
            res.status(201).json({ message: 'Successfully created workout!', workoutId: data._id });
        })
        .catch(err => console.log(err));
});

router.post('/add-exercise', (req, res) => {
    workoutService.pushExercise(req.body)
        .then(data => {
            res.status(201).json({ message: 'Successfully added exercise!' });
        });
});

router.post('/add-desc-rating', (req, res) => {
    workoutService.pushDescriptionAndRating(req.body)
        .then(data => {
            res.status(201).json({ message: 'Successfully added rating and description!' });
        });
});

router.get('/get-workouts/:userId', (req, res) => {
    workoutService.getAll(req.params.userId)
        .then(workouts => {
            res.status(200).json({ message: 'Successfully fetched workouts!', workouts });
        })
});

module.exports = router;