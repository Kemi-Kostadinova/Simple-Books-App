const router = require("express").Router();

const userServise = require("../services/userService");

router.post("/register", async (req, res) => {
    const userData = req.body;

    const { userId, email, token } = await userServise.register(userData);

    res.json({
        userId,
        email,
        token,
    })
});

router.post("/login", async (req, res) => {
    const userData = req.body;

    const { userId, email, token } = await userServise.login(userData);

    res.json({
        userId,
        email,
        token,
    })
});

router.get("/logout", async (req, res) => {
    res.json({ok: true})
});

module.exports = router;