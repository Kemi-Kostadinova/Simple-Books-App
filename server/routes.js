const router = require("express").Router();

const userController = require("./controllers/userController");
const bookController = require("./controllers/bookController");

router.use("/user", userController);
router.use("/book", bookController);

router.get("*", (req, res) => {
    res.redirect("/404");
});

module.exports = router;