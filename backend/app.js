const express = require ('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://MarionNed:P6piiqaunte@cluster0.zsz1rin.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const sauce = require

const app = express();
 
//premier middleware//
app.use((req, res, next) =>{
    console.log ('reqûete reçue');
    next();
})

//Deuxièmeme middleware//
app.use((req, res, next) => {
    res.status(201);
    next();
});

//Troisième middleware//
app.use((req, res, next) =>{
    res.json({message : "votre 3ème requête a bien été reçu"})
    next();
});

//Quatrième middleware//
app.use((req, res) =>{
    console.log("réponse envoyé avec succès !")
}),

module.exports = app;

