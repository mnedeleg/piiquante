const express = require("express");
const multer = require ('../middleware/multer-config')
const userCtrl = require("../controllers/user");
const password = require("../middleware/password");
const router = express.Router();

router.post("/signup", password, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;