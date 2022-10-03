const Sauce = require("../models/sauce");
const sauce = require("../models/sauce");

 //create a sauce //
exports.createSauce =  (req, res, next) => {
    console.log(req.body);
    console.log(JSON.parse(req.body.sauce));
    console.log(req.file);
    const data = JSON.parse(req.body.sauce)
    console.log(data);
    const sauce = new Sauce ({
      name: data.name,
      description: data.description,
      imageUrl: `http://localhost:3000/${req.file.path}`,
      userId: data.userId,
      heat: data.heat,
      manufacturer: data.manufacturer,
      mainPepper: data.mainPepper,
      likes: 0,
      dislikes: 0,
      usersLiked: [],
      usersDisliked: []
    });

    Sauce.init()
    sauce.save()
    .then(()=> res.status(201).json({message: "Sauce enregistrée"}))
    .catch(error => res.status(400).json({ error }));
  }

// modify sauce //
exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ?{
        ...JSON.parse(req.body.sauce),
        imageUrl : `${req.protocol}://${req.get("host")}/image/${req.file.filename}`
    } : {...req.body};

    delete sauceObject._userId;
    Sauce.findOne({_id: req.params.id})
    .then((sauce) => {
        if (sauce.userId != req.auth.userId) {
            res.status(401).json({message : "non-autorisé"});
        }else{
            Sauce.updateOne({_id: req.params.id}, {...sauceObject, _id: req.params.id})
            .then(() => res.status(200).json({message : "objet modifié"}))
            .catch(error => res.status(401).json({error}))

        }
    })
    .catch((error) => {
        res.status(404).json({error});
    }
    )
    // Sauce.updatedOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    // .then(() => res.status(200).json('objet modifié'))
    // .catch(error => res.status(404).json({error}));
  };

// delete sauce //
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json('objet supprimé'))
    .catch(error => res.status(404).json({error}));
  };

// get only one sauce //
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({error}));
  };

// get all sauce //
exports.getAllSauce = (req, res, next) => {
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