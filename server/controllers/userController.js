const router = require("express").Router();

const userService = require("../services/userService");

router.post("/register", async (req, res) => {
    const userData = req.body;

    const { userId, email, token } = await userService.register(userData);

    res.cookie('auth', token);

    res.json({
        userId,
        email,
        token,
    })
});

router.post("/login", async (req, res) => {
    const userData = req.body;

    const { userId, email, token } = await userService.login(userData);

    res.cookie('auth', token);

    res.json({
        userId,
        email,
        token,
    })
});

router.get("/logout", async (req, res) => {
    res.clearCookie("auth");

    res.json({ok: true})
});

router.get("/profile", async (req, res) => {
    const currentUser = await userService.getInfo(req.user._id);

    res.json(currentUser);
});

module.exports = router;