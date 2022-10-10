const express = require("express");
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');
const sauceCtrl = require("../controllers/sauce");
const router = express.Router();

router.post('/', auth, multer , sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, multer, sauceCtrl.deleteSauce);
router.get('/:id', auth, multer, sauceCtrl.getOneSauce);
router.get('/', auth, multer, sauceCtrl.getAllSauce);

module.exports = router;
