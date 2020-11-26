// Verifica si un usuario en Admin para la creacion de productos

module.exports = function(req, res, next) {

    if (req.query.user == "Admin") {

        next();

    } else {

        res.redirect("/");

    }    
}