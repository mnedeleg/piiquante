const Sauce = require("../models/sauce");
const sauce = require("../models/sauce");


// adding like/Dislike
exports.addlikeDislike = (req, res, next) => {
   
    console.log("test route like");
    console.log("contenu de req.body", req.body);
// findOne, aller chercher la sauce dans la base de donné //
    Sauce.findOne({_id : req.params.id})
    .then((sauce) =>{
        console.log("content promise"),
        console.log(sauce);
        // res.status(200).json(sauce);
        if(Sauce.usersLiked.includes(req.body.userId)){
            console.log("instruction to follow");

        }
    })
    .catch((error) => res.status(404).json({message: 'problème'}));

        // case 1 : likes = 1 (+1)
        // case 2 : likes = 0 (neutral) (non activated like)
        //case 3 : likes = -1 === dislikes = 1 (+1)




        // Sauce.find({})
        // .then(sauce => res.status(200).json(sauce))
        // .catch(error => res.status(400).json({error}));
    }
