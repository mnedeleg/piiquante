const updateSauce = require("./updateSauce.js")

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

module.exports = handleDislikes;