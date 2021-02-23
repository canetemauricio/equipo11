const path = require("path");
const { body } = require("express-validator");
const bcrypt = require("bcryptjs");

const { profile } = require("../database/models");

module.exports = {
  register: [
    body("user")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isLength({ min: 4 })
      .withMessage("El nombre de usuario debe tener un minimo de 4 caracteres")
      .bail()
      .isLength({ max: 24 })
      .withMessage("El nombre de usuario debe tener un minimo de 24 caracteres")
      .custom((value) => {
        return profile
          .findOne({
            where: {
              user: value,
            },
          })
          .then((user) => {
            if (user) {
              return Promise.reject("Este usuario ya está registrado");
            }
          });
      }),
    body("email")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isEmail()
      .withMessage("Debes ingresar une mail valido")
      .bail()
      .custom((value) => {
        return profile
          .findOne({
            where: {
              email: value,
            },
          })
          .then((user) => {
            if (user) {
              return Promise.reject("Este email ya está registrado");
            }
          });
      }),
    body("password")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isLength({ min: 4 })
      .withMessage("La contraseña debe tener un minimo de 4 caracteres")
      .bail(),
  ],
  login: [
    body("email")
      .notEmpty()
      .withMessage("Requerido")
      .bail()
      .isEmail()
      .withMessage("Email Invalido")
      .bail()
      .custom((value, { req }) => {
        return profile
          .findOne({
            where: {
              email: value,
            },
          })
          .then((profile) => {
            if (profile) {
              if (!bcrypt.compareSync(req.body.password, profile.password)) {
                console.log(req.body.password);
                console.log(profile.password);
                return Promise.reject("Email o Contraseña invalidos");
              }
            } else {
              return Promise.reject("Email o Contraseña Invalidos");
            }
          });
      }),
  ],
  createProduct: [
    body("name")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isLength({ min: 4 })
      .withMessage("El nombre debe tener al menos 4 caracteres")
      .bail()
      .isLength({ max: 24 })
      .withMessage("El nombre debe tener un maximo de 24 caracteres")
      .bail(),
    body("price")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isNumeric()
      .withMessage("Precio incorrecto, solo se aceptan Numeros")
      .bail(),
    body("category").notEmpty().withMessage("Campo Obligatorio").bail(),
    body("description")
      .notEmpty()
      .withMessage("Campo Obligatorio")
      .bail()
      .isLength({ min: 32 })
      .withMessage("La descripcion debe tener al menos 32 caracteres")
      .bail()
      .isLength({ max: 255 })
      .withMessage("La descripcion debe tener un maximo de 255 caracteres")
      .bail(),
    body("brand").notEmpty().withMessage("Campo Obligatorio"),
    body("gender").notEmpty().withMessage("Campo Obligatorio"),
  ],
};
