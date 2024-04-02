const router = require("express").Router();

const userService = require("../services/userService");
const { getErrorMessage } = require("../utils/errorUtils");

router.post("/register", async (req, res) => {
  const userData = req.body;

  try {
    const { userId, email, token } = await userService.register(userData);

    res.cookie("auth", token);

    res.json({
      userId,
      email,
      token,
    });
  } catch (err) {
    res.json({ error: getErrorMessage(err) });
  }
});

router.post("/login", async (req, res) => {
  const userData = req.body;

  try {
    const { userId, email, token } = await userService.login(userData);

    res.cookie("auth", token);

    res.json({
      userId,
      email,
      token,
    });
  } catch (err) {
    res.json({ error: getErrorMessage(err) });
  }
});

router.get("/logout", async (req, res) => {
  res.clearCookie("auth");

  res.json({ ok: true });
});

router.get("/profile", async (req, res) => {
  try {
    const currentUser = await userService.getInfo(req.user?._id);

    res.json(currentUser);
  } catch (err) {
    res.json({ error: getErrorMessage(err) });
  }
});

module.exports = router;
