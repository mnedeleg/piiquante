const Sauce = require("../models/sauce");
const sauce = require("../models/sauce");

 //create a sauce //
exports.createSauce =  (req, res, next) => {
    console.log(req.body);
    console.log(JSON.parse(req.body.sauce));
    console.log(req.file);
    const data = JSON.parse(req.body.sauce)
    const sauce = new Sauce ({
      title: data.name,
      description: data.description,
      imageURL: `http://localhost:3000/${req.file.path}`,
      userId: data.userId,
      heat: data.heat
    });
    
    Sauce.init()
    sauce.save()
    .then(()=> res.status(201).json({message: "Sauce enregistrée"}))
    .catch(error => res.status(400).json({ error }));
  }

// modify sauce //
exports.modifySauce = (req, res, next) => {
    Sauce.updatedOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json('objet modifié'))
    .catch(error => res.status(404).json({error}));
  };

// delete sauce //
exports.deleteSauce = (req, res, next) => {
    Sauce.deletedOne({_id: req.params.id})
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
    Sauce.find()
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(400).json({error}));
    };