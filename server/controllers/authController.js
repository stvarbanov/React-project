const router = require('express').Router();

const { COOKIE_NAME } = require('../config/config');

const authServices = require('../services/authService');

router.post('/register', (req, res) => {
    authServices.register(req.body)
        .then(data => {
            res.cookie(COOKIE_NAME, data.token, { httpOnly: false });
            res.status(201).json({ message: 'Successful registration!', type: 'success', user: {id: data.user._id, username: data.user.username, email: data.user.email, weight: data.user.weight, height: data.user.height, age: data.user.age }});
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});

router.post('/login', (req, res) => {
    authServices.login(req.body)
        .then(data => {
            res.cookie(COOKIE_NAME, data.token, { httpOnly: false });
            res.status(200).json({ message: 'You logged in successfully!', type: 'success', user: {id: data.user._id, username: data.user.username, email: data.user.email, weight: data.user.weight, height: data.user.height, age: data.user.age }});
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ message: err, type: 'error' });
        });
});

// router.post('/change-user-data/:userId', (req, res) => {
//     authServices.changeData(req.body, req.params.userId)
//         .then(user => {
//             res.status(200).json({ message: 'Info changed successfully!', type: 'success', user: {id: user._id, username: user.username, email: user.email, weight: user.weight, height: user.height, age: user.age }});
//         })  
//         .catch(err => {
//             res.status(400).json({ message: err, type: 'error' })
//         })
// });

// router.get('/reset-progress/:userId', (req, res) => {
//     authServices.resetProgress(req.params.userId)
//         .then(() => {
//             res.status(200).json({ message: 'Workout progress reseted successfully!', type: 'success' })
//         })
//         .catch(err => {
//             res.status(400).json({ message: err, type: 'error' });
//         })
// });

// router.post('/check-email', (req, res) => {
//     authServices.checkEmail(req.body)
//         .then(() => {
//             res.status(200).json({ message: 'The email is existing', type: 'success' })
//         })
//         .catch(err => {
//             res.status(400).json({ message: err, type: 'error' });
//         });
// });

// router.post('/reset-password', (req, res) => {
//     authServices.resetPassword(req.body)
//         .then(user => {
//             res.status(200).json({ message: 'Password changed successfully!', type: 'success', user: { id: user._id, username: user.username, email: user.email, weight: user.weight, height: user.height, age: user.age }})
//         })
//         .catch(err => {
//             res.status(400).json({ message: err, type: 'error' })
//         });
// });

module.exports = router;