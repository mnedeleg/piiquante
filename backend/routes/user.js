const express = require("express");
const multer = require ('../middleware/multer-config')
const userCtrl = require("../controllers/user");
const password = require("../middleware/password");
const router = express.Router();

router.post("/signup", userCtrl.signup);
router.post("/login", password, userCtrl.login);

module.exports = router;