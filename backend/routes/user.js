const express = require("express");
const multer = require ('../middleware/multer-config')
const userCtrl = require("../controllers/user");
const router = express.Router();

router.post("/signup", userCtrl.signup);
router.post("/login",multer, userCtrl.login);

module.exports = router;