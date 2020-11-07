const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, "Thisismyproject", (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                return res.redirect('/login');
            } else {
                next();
            }
        })
    } else {
        return res.redirect('/login');
    }

}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, "Thisismyproject", async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                console.log(err);
                next();
            } else {
                const user = await User.findById(decodedToken._id);
                res.locals.user = user;
                console.log(user);
                console.log(decodedToken);
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}
module.exports = { requireAuth, checkUser };