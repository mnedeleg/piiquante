const jwt = require("jsonwebtoken");
const user = require("../models/user");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET_IMAGINATION");
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        next()
    } catch(error){
        console.log(error);
        res.status(401).json({error});
    }
};