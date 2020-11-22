// Verifica la IP que accede al sitio, reemplazar ::2 por la correcta

module.exports = function(req, res, next) {

    if (req.ip == "::2") {
        return res.send("No podes acceder en este momento")

    }

    next()

}