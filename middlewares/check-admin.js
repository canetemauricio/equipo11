// Verifica si un usuario en Admin para la creacion de productos

module.exports = function(req, res, next) {

    if ( req.session.user.type == 'admin') {
        next();

    } else {
        console.log('Usuario NO autorizado')
        return res.render("./auth/login", { title: "LOGIN -MAG" , errors: [{msg: 'Necesitás iniciar sesión para acceder a esta sección.'}] });
    }    
}