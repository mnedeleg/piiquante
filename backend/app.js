const express = require('express');
const path = require("path");
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
const sauceRoute = require("./routes/sauce");
const likeRoute = require("./routes/like");

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });


app.use("/api/sauces", sauceRoute, likeRoute);
app.use("/api/auth/", userRoute);
app.use("/image", express.static(path.join(__dirname, "image")));
module.exports = app;

