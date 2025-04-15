const router = require("express").Router();

const { loginAuth, signAuth } = require("../controllers/authControllers");

router.post("/signup", signAuth);
router.post("/login", loginAuth);

module.exports = router;
