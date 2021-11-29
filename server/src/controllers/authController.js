const router = require('express').Router();
const authService = require('../services/authService.js');
const { AUTH_COOKIE } = require('../constants.js');
const { isAuthRouteGuard, isGuestRouteGuard } = require('../middleware/authMiddle.js');



router.post('/login', isGuestRouteGuard, async (req, res) => {

    const { username, password } = req.body;

    try {
        let token = await authService.login({ username, password });

        res.cookie(AUTH_COOKIE, token);

    } catch (error) {

        console.log(error);
        res.end();
    }

});

router.post('/register', async (req, res) => {

    const { username, email, password, rePassword, color } = req.body;
    if (password !== rePassword) {

        res.locals.error = 'Passwords do not match';

        return res.error('Pass no match')
    }
    try {

        await authService.register({
            username,
            email,
            password,
            rePassword,
            color
        });

  
        // login after registration 
        let token = await authService.login({
            username,
            password
        });
     
        res.cookie(AUTH_COOKIE, token);


    } catch (err) {

    }

});

router.get('/logout', isAuthRouteGuard, (req, res) => {

    res.clearCookie(AUTH_COOKIE);
    res.redirect('/');
});

module.exports = router;