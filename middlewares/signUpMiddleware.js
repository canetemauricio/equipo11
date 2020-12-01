const { check, validationResult, body } = require("express-validator");
const fs = require("fs");

module.exports = [
   check ('UserName').isLength({min:2}).withMessage('El nombre de usuario debe tener al menos 2 caracteres.'),
   check('UserEmail').isEmail().withMessage('Por favor ingresá un email válido.'),
   check('password').isLength({min:6}).withMessage('La contraseña debe tener al menos 6 caracteres.'),
   body('UserEmail').custom(function(mail){

    let userFile = fs.readFileSync('./data/users.json',{encoding: 'utf-8'})
    let usuarios;
    if(userFile==""){
       usuarios =[]
    } else{
       usuarios = JSON.parse(userFile)
    }
   for (let i  = 0; i < usuarios.length; i++){
        if(usuarios[i].email == mail){
            return false
        }
    }

    return true

   }).withMessage('Email ya utilizado.')
]