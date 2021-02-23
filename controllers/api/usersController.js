const { validationResult } = require("express-validator");
const fs = require("fs");
const { RequestHeaderFieldsTooLarge } = require("http-errors");
const { title, send } = require("process");
let db = require("../../database/models");

const { profile } = require("../../database/models");

let usersAPIController = {
  list: function (req, res) {
    db.profile.findAll().then(function (profile) {
      for (let i = 0; i < profile.length; i++) {
        profile[i].setDataValue("endpoint", "/api/users/" + profile[i].id);
        delete profile[i].dataValues.password;
        delete profile[i].dataValues.remember_token;
        delete profile[i].dataValues.type;
      }
      let respuesta = {
        status: 200,
        count: profile.length,
        // meta: {
        //   status: 200,
        //   total: profile.length,
        //   url: "/api/users",
        // },
        users: profile,
      };
      res.json(respuesta);
    });
  },
  find: function (req, res) {
    db.profile.findByPk(req.params.id).then(function (profile) {
      delete profile.dataValues.password;
      delete profile.dataValues.remember_token;
      delete profile.dataValues.type;
      res.json(profile);
    });
  },
};

module.exports = usersAPIController;
