const Sauce = require("../models/sauce");
const sauce = require("../models/sauce");


// adding like/Dislike
exports.addlikeDislike = (req, res, next) => {
    try {
        console.log("test");
        Sauce.find({})
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(400).json({error}));
    }
    catch(error){
        console.log(error);
    }

    };