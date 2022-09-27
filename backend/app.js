const express = require('express');

require("dotenv").config();
const id = process.env.id;
const pwd = process.env.pwd;

console.log(process.env.pwd);
console.log(process.env.id);


const app = express();

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

const sauce = require("./models/sauce");

const mongoose = require('mongoose');
const dataBaseUrl = `mongodb+srv://${id}:${pwd}@cluster0.zsz1rin.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dataBaseUrl,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json()); 

app.post('/api/sauce', (req, res, next) =>{
  const sauce = new sauce ({
    ...req.body
  });
  sauce.save()
  .then(()=> res.status(201).json({message: "Sauce enregistrée"}))
  .catch(error => res.status(400).json({ error }));
});

const userRoute = require("./routes/user");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use("/api/auth/", userRoute);

module.exports = app;

