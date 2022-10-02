const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema ({
    name : { type: String, required: true},
    description : { type: String, required: true},
    imageUrl : { type: String, required: true},
    userId : { type: String, required: true},
    heat : { type: Number, required: true},
    manufacturer: { type: String, required: true},
    mainPepper: { type: String, required: true},
    likes: { type: Number, default: 0, required: true},
    dislikes: { type: Number, default: 0, required: true},
    usersLiked: { type: [String], default: [],required: true},
    usersDisliked: { type: [String], default: [], required: true}
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
  