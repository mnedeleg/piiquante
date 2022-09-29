const express = require('express');

require('dotenv').config();
const multer = require('./middleware/multer-config');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const id = process.env.id;
const pwd = process.env.pwd;

console.log(process.env.pwd);
console.log(process.env.id);
// const multer = require("multer");
// const upload = multer({dest: "./image"});

const app = express();
app.use(express.json()); 
app.use(cors())
// app.use(multer()); 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});


const dataBaseUrl = `mongodb+srv://${id}:${pwd}@cluster0.zsz1rin.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dataBaseUrl,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const userRoute = require("./routes/user");


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });

const Sauce = require("./models/sauce");

app.post('/api/sauces', multer , (req, res, next) =>{
  console.log(req.body);
  console.log(JSON.parse(req.body.sauce));
  console.log(req.file);
  const data = JSON.parse(req.body.sauce)
  const sauce = new Sauce ({
    title: data.name,
    description: data.description,
    imageURL: `http://localhost:3000/${req.file.path}`,
    userId: data.userId,
    price: data.heat
  });
  Sauce.init()
  sauce.save()
  .then(()=> res.status(201).json({message: "Sauce enregistrée"}))
  .catch(error => res.status(400).json({ error }));

});

app.use('/api/sauces', (req, res, next) => {
Sauce.find()
.then(sauce => res.status(200).json(sauce))
.catch(error => res.status(400).json({error}));
});


// rajouter un multer ici ? //
app.use("/api/auth/", userRoute);

module.exports = app;

