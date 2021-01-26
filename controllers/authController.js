const bcrypt = require("bcryptjs");
const fs = require("fs");
const { title } = require("process");
let users = require("../data/users.json");
const { check, validationResult, body } = require("express-validator");

const {
  profile,
  product,
  cart,
} = require('../database/models');

module.exports = {
  login: function (req, res) {
    res.render("./auth/login", { title: "LOGIN -MAG" });
  }, // FUNCIONA
  register: function (req, res) {
    res.render("./auth/register", { title: "CREATE ACCOUNT - MAG" });
  }, // FUNCIONA

  validateLogin: function(req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      profile.findOne({
        where: {
          email: req.body.email
        }
      })
        .then((user) => {
          let dUser = { ...user.dataValues}
          req.session.user = dUser;

          if(req.body.remember) {
            console.log('RememberTokenWIP')
            return res.redirect('/')
          } else {
            console.log(errors)
            return res.redirect('/')
          }          
        })
        .catch((e) => console.log(e))
    } else {
      console.log(errors)
      return res.render("./auth/login", {
        title: "LOGIN - MAG",
        errors: errors.mapped(),
        old: req.body
      })
    }
  },

  // validateLogin: function (req, res) {
  //   let errors = validationResult(req);

  //   let loggedUser;
  //   if (errors.isEmpty()) {
  //     let userFile = fs.readFileSync("./data/users.json", {
  //       encoding: "utf-8",
  //     });
  //     let usuarios;
  //     if (userFile == "") {
  //       usuarios = [];
  //     } else {
  //       usuarios = JSON.parse(userFile);
  //     }

  //     for (let i = 0; i < usuarios.length; i++) {
  //       if (usuarios[i].email == req.body.email) {
  //         if (bcrypt.compareSync(req.body.password, usuarios[i].password)) {
  //           loggedUser = usuarios[i];
  //           break;
  //         }
  //       }
  //     }

  //     if (loggedUser == undefined) {
  //       res.render("./auth/login", {
  //         title: "LOGIN - MAG",
  //         errors: [{ msg: "credenciales inválidas." }],
  //       });
  //     } else {
  //       req.session.loggedUser = loggedUser.userName.toUpperCase();
  //       res.locals = { user: req.session.loggedUser };
  //       res.redirect('/');
  //     }
  //   } else {
  //     res.render("./auth/login", { errors: errors.errors });
  //   }
  // },

  store: function(req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const dBody = req.body;
      var salt = bcrypt.genSaltSync(10)
      dBody.password = bcrypt.hashSync(dBody.password, salt);
      dBody.type = 'admin';
      // dBody.image = reqfile ? req.file.filename : null;

      profile.create(dBody)
        .then(res.redirect('./login'))
        .catch((e) => console.log(e))
    } else {
      console.log(errors)
      return res.render("./register", {
        title: "CREATE ACCOUNT - MAG",
        errors: errors.mapped(),
        old: req.body,
      })
    }
  },

  // store: function (req, res, next) {
  //   let errors = validationResult(req);

  //   if (errors.isEmpty()) {
  //     let user = {
  //       userName: req.body.UserName,
  //       email: req.body.UserEmail,
  //       password: bcrypt.hashSync(req.body.password, 10),
  //       avatar: req.files[0].filename,
  //     };

  //     let userFile = fs.readFileSync("./data/users.json", {
  //       encoding: "utf-8",
  //     });
  //     let usuarios;
  //     if (userFile == "") {
  //       usuarios = [];
  //     } else {
  //       usuarios = JSON.parse(userFile);
  //     }
  //     usuarios.push(user);

  //     usuariosJSON = JSON.stringify(usuarios);

  //     fs.writeFileSync("./data/users.json", usuariosJSON);

  //     console.log(user);
  //     res.redirect("/");
  //   } else {
  //     return res.render("./auth/register", {
  //       title: "CREATE ACCOUNT - MAG",
  //       errors: errors.errors,
  //     });
  //   }
  // },

  logout: function (req, res) {
    req.session.destroy();
    res.redirect("/");
  },
};
