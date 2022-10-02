const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema ({
    title : { type: String, required: true},
    description : { type: String, required: true},
    imageURL : { type: String, required: true},
    userId : { type: String, required: true},
    heat : { type: Number, required: true},
});

module.exports = mongoose.model("sauce", sauceSchema);
