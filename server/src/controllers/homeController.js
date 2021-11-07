const router = require('express').Router();

// router.get('/', (req, res) => {
//     res.render('home');

// });

router.post('/connect', (req, res) => {
   
    console.log('Connected from React!');
    res.redirect('/');

});

module.exports = router;