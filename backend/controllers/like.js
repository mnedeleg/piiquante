const Sauce = require("../models/sauce");
const updateSauce = require("./sauceHelpers/updateSauce");
const handleLikes = require("./sauceHelpers/handleLike");
const handleDislikes = require("./sauceHelpers/handleDislike");
const handleNoLikeDislike = require("./sauceHelpers/handleNoLikeDislike");

// adding like/Dislike
exports.addlikeDislike = (req, res, next) => {
    console.log(typeof req.body.like);

// findOne, get sauce in database //
    Sauce.findOne({_id : req.params.id})
    .then((sauce) => {
        console.log("content promise");
        console.log(sauce);
        const likeValues = [1, 0, -1];
        const userId = req.body.userId; 
        if(likeValues.includes(req.body.like)){

            const handlers = {
                "handler1": handleLikes,
                "handler-1": handleDislikes,
                "handler0": handleNoLikeDislike
            }
            const funcKey = `handler${req.body.like}`
            return handlers[funcKey](req, res, sauce, userId)

        }else{
            res.status(400).json({messsage: "La valeur de like envoyée n'est pas bonne ! "})
        }
    })
        .catch((error) => res.status(404).json({message: 'problem', error: error.message}));
}


        
    
