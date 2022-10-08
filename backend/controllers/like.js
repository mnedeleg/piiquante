const Sauce = require("../models/sauce");
const updateSauce = require("./sauceHelpers/updateSauce");
const handleLikes = require("./sauceHelpers/handleLike");
const handleDislikes = (req, res, sauce) => {
    const userId = req.body.userId; 
    if(!sauce.usersDisliked.includes(userId) ){
        console.log("instruction to follow : dislikes");
        let { likes, dislikes, usersDisliked, usersLiked } = sauce;
        usersLiked = usersLiked.filter(userId => userId != userId);
        dislikes += 1;
        usersDisliked.push(userId);
        likes = likes == 0 ? 0 : likes - 1;
        return updateSauce(req, res, {
            usersDisliked: usersDisliked, 
            likes: likes, 
            dislikes: dislikes,
            usersLiked: usersLiked
        }, "dislike");
    }else{
        return  res.status(400).json({message: "Utilisateur a déjà disliké"})
    }
}

const handleNoLikeDislike = (req, res, sauce) => {
    const userId = req.body.userId; 
    let { likes, dislikes, usersDisliked, usersLiked } = sauce;
    if(usersDisliked.includes(userId) ){
        dislikes -= 1;
        usersDisliked = usersDisliked.filter(userId => userId != userId);
    }
    if(usersLiked.includes(userId) ){
        dislikes += 1;
        usersLiked = usersLiked.filter(userId => userId != userId);
    }
    return updateSauce(req, res, {
        usersDisliked: usersDisliked, 
        likes: likes, 
        dislikes: dislikes,
        usersLiked: usersLiked
    });
}

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
        const likeValues = [1, 0, -1];
        const userId = req.body.userId; 
        if(likeValues.includes(req.body.likes)){

            const handlers = {
                "handler1": handleLikes,
                "handler-1": handleDislikes,
                "handler0": handleNoLikeDislike
            }
            const funcKey = `handler${req.body.likes}`
            return handlers[funcKey](req, res, sauce)

        }else{
            res.status(400).json({messsage: "La valeur de like envoyé n'est pas bonne ! "})
        }
       
    })
        .catch((error) => res.status(404).json({message: 'problem', error: error.message}));
}


        
    
