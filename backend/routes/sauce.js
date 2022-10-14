const express = require("express");
const auth = require("../middleware/auth");
// const form = require("../middleware/form");
const multer = require('../middleware/multer-config');
const sauceCtrl = require("../controllers/sauce");
// const {body} =require("express-validator")
const router = express.Router();

// let validation = [
//     body("name").isLength({min : 3}),
//     body("description").isLength({min : 3}),
//     body("manufacturer").isLength({min : 3}),
//     body("mainpepper").isLength({min : 3}),
// ]


router.post('/', auth, multer , sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauce);

module.exports = router;
