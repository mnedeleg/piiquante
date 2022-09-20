const express = require('express');

require("dotenv").config();
console.log(process.env.pwd);
console.log(process.env.id);


const app = express();

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cluster0.zsz1rin.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json()); 


const userRoute = require("./routes/user");


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use("/api/auth/signup", userRoute);

module.exports = app;

