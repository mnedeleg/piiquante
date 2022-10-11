const updateSauce = require("./updateSauce.js")

const handleNoLikeDislike = (req, res, sauce) => {
    const userId = req.body.userId; 
    let { likes, dislikes, usersDisliked, usersLiked } = sauce;
    console.log(likes, dislikes);
    if(usersDisliked.includes(userId) ){
        dislikes -= 1;
        usersDisliked = usersDisliked.filter(userId => userId != userId);
    }
    if(usersLiked.includes(userId) ){
        likes -= 1;
        usersLiked = usersLiked.filter(userId => userId != userId);
    }
    console.log(likes, dislikes);
    return updateSauce(req, res, {
        usersDisliked: usersDisliked, 
        likes: likes, 
        dislikes: dislikes,
        usersLiked: usersLiked
    });
}

module.exports = handleNoLikeDislike;