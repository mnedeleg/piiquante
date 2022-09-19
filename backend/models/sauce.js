const mongoose = require ("mongoose");

const sauceSchema = moogoose.schema ({
    title : { type: String, required: true},
    description : { type: String, required: true},
    imageURL : { type: String, required: true},
    userId : { type: String, required: true},
    price : { type: Number, required: true},
});

module.exports = mongoose.model("sauce", sauceSchema);