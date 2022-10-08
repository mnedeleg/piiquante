const Sauce = require("../models/sauce");
const sauce = require("../models/sauce");


// adding like/Dislike
exports.addlikeDislike = (req, res, next) => {
   
    console.log("test route like");

    // req.body = userId + likes //
    console.log("contenu de req.body - ctrl like", req.body);
    console.log("contenu de req.body.likes", req.body.likes);
    console.log("contenu req.params. ctrl like", req.params);
    console.log("id >> _id", {_id : req.params.id})
// findOne, aller chercher la sauce dans la base de donné //
    Sauce.findOne({_id : req.params.id})
    .then((sauce) => {
        console.log("content promise");
        console.log(sauce);
        // adding likes //
        if(!sauce.usersLiked.includes(req.body.userId && req.body.likes === 1)){
            console.log("instruction to follow");
            Sauce.updateOne({_id : req.params.id}, {$inc: {likes: 1}, $push: {usersLiked: req.body.userId}})
         
                .then(() => res.status(201).json({message: 'adding like / +1'}))
                .catch((error) => res.status(400).json({message: 'problem like'}));
        }

        // no like === 0, back to neutral //
        if(sauce.usersLiked.includes(req.body.userId && req.body.likes === 0)){
            console.log("instruction to follow : neutral");
            Sauce.updateOne({_id : req.params.id}, {$inc: {likes: -1}, $pull: {usersLiked: req.body.userId}})
         
                .then(() => res.status(201).json({message: 'neutral / 0'}))
                .catch((error) => res.status(400).json({message: 'problem neutral'}));
        }

        // dislike === -1 //
        if(!sauce.usersDisliked.includes(req.body.userId && req.body.likes === -1)){
            console.log("instruction to follow : dislike");
            Sauce.updateOne({_id : req.params.id}, {$inc: {dislikes: 1}, $push: {usersDisliked: req.body.userId}})
         
                .then(() => res.status(201).json({message: 'dislike / +1'}))
                .catch((error) => res.status(400).json({message: 'problem dislike'}));
        }

    })
    .catch((error) => res.status(404).json({message: 'problem'}));
    
    
    }
        
    
