const updateSauce = require("./updateSauce.js")

const handleLikes = (req, res, sauce) => {
    const userId = req.body.userId; 
    if(!sauce.usersLiked.includes(userId)){
        let { likes, dislikes, usersDisliked, usersLiked } = sauce;
        usersDisliked = usersDisliked.filter(userId => userId != userId)
        usersLiked.push(userId);
        likes += 1;
        dislikes = dislikes == 0 ? 0 : sauce.dislikes -1;
        return updateSauce(req, res, {
            usersDisliked: usersDisliked, 
            likes: likes, 
            dislikes: dislikes,
            usersLiked: usersLiked
        }, "like");
        
    }else{
        return res.status(400).json({message: "Utilisateur a déjà liké"})
    }
}

module.exports = handleLikes;