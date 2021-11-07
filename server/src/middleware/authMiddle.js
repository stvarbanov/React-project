const jwt = require('../utils/jwt.js');
const { AUTH_COOKIE, JWT_SECRET } = require('../constants.js');

//each middleware should receive next 

exports.auth = function (req, res, next) {

    let token = req.cookies[AUTH_COOKIE];

    //if there is the cookie, user is logged in
    if (token) {
        jwt.verify(token, JWT_SECRET)
            .then(decodedToken => {
                req.user = decodedToken;
                //this 'user' is passed for guest validation
                res.locals.user = decodedToken;
                next();
            })
            //user has token, but it's not valid
            .catch(err => {
                res.clearCookie(AUTH_COOKIE);
                // res.status(401).render('404');
                res.redirect('/login');
            })
    } else {
        //user is not logged in
        next();
    }

}
exports.isAuthRouteGuard = function (req, res, next) {

    if (req.user) {
        next()
    } else {
        res.redirect('/auth/login');
    }
}

exports.isGuestRouteGuard = function (req, res, next) {
    if (!req.user) {
        next();
    } else {
        res.redirect('/');
    }

}
