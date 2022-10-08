const Sauce = require("../../models/sauce");
const updateSauce = (req, res, fields, action = "no like, no dislike") => {
    return Sauce.updateOne({_id : req.params.id}, {
        $set: fields
    })
    .then(() => res.status(201).json({message: `${action} done ! `}))
    .catch((error) => res.status(400).json({message: `'problem ${action}`, error: error.message}));
}
module.exports = updateSauce;