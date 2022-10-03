const express = require("express");
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');
const sauceCtrl = require("../controllers/sauce");
const likeCtrl = require("../controllers/like");

const router = express.Router();

router.post('/:id/like', auth, multer , likeCtrl.addlikeDislike);

module.exports = router;