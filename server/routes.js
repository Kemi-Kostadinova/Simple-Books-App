const router = require("express").Router();

const userController = require("./controllers/userController");

router.use("/user", userController);

router.get("*", (req, res) => {
    res.redirect("/404");
});

module.exports = router;