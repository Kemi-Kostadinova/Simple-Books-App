const jwt = require("../lib/jwt");

exports.auth = async (req, res, next) => {
    const token = req.headers["x-authorization"];

    if (!token) {
        return next();
    };

    try {
        const decodedToken = await jwt.verify(token, "MYSECRET");

        req.user = decodedToken;

        next();
    } catch {
        res.redirect("/auth/login");
    };
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect("/user/login");
    };

    next();
};

exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.redirect("/");
    };

    next();
};