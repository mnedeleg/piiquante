const token = require("jsonwebtoken");
const user = require("../models/user");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = token.verify(token, "RANDOM_TOKEN°_SECRET_IMAGINATION");
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };

    } catch(error){
        res.status(401).json({error});
    }
};