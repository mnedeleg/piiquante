const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema ({
    name : { type: String, required: true},
    description : { type: String, required: true},
    imageUrl : { type: String, required: true},
    userId : { type: String, required: true},
    heat : { type: Number, required: true},
    manufacturer: { type: String, required: true},
    mainPepper: { type: String, required: true},
    likes: { type: Number, default: 0},
    dislikes: { type: Number, default: 0},
    usersLiked: { type: [String], default: []},
    usersDisliked: { type: [String], default: []}
});

module.exports = mongoose.model("sauce", sauceSchema);

// export class Sauce {
//     _id!: string;
//     name!: string;
//     manufacturer!: string;
//     description!: string;
//     heat!: number;
//     likes!: number;
//     dislikes!: number;
//     imageUrl!: string;
//     mainPepper!: string;
//     usersLiked!: string[];
//     usersDisliked!: string[];
//     userId!: string;
//   }
  