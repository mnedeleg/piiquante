const express = require("express");
const router = express.Router();
const multer = require('../middleware/multer-config');
const sauceCtrl = require("../controllers/sauce");

router.post('/', multer , sauceCtrl.createSauce);
router.put('/:id', multer, sauceCtrl.modifySauce);
router.delete('/:id', multer, sauceCtrl.deleteSauce);
router.get('/:id', multer, sauceCtrl.getOneSauce);
router.get('/', multer, sauceCtrl.getAllSauce);

module.exports = router;
