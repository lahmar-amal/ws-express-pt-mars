const isAuth = (req, res, next) => {
    const isAuthorized = true;
    if (isAuthorized) {
        next();
    } else {
        // unauthorized => status (http) code : 401
        res.status(401).send({ msg: "you're not authorized , plz login " });
    }
};

module.exports = isAuth;
