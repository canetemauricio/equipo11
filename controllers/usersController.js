module.exports = {
  profile: function (req, res, next) {
    res.render("./users/index", {
      title: "Perfil",
    });
  },
};
