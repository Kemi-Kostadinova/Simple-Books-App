const router = require("express").Router();

router.get("*", (req, res) => {
    res.redirect("/404");
});

module.exports = router;