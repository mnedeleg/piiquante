const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase(1)                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']);

module.exports = (req, res, next) =>{
   
    if(passwordSchema.validate(req.body.password)){
        console.log(passwordSchema);
      next();
    }else{
        return res.status(400).json({error : "Le mot de passe n'est pas assez fort"}) 
    }
};