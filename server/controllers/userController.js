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

module.exports = router;