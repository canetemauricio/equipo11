module.exports = {

home: function(req,res){
res.render('./main/index', {title: 'MAG - CADA PRENDA TIENE SU HISTORIA'})
}, //   FUNCIONA
about: function(req,res){
    res.send('Equipo 11') //FUNCIONA

}, //   FUNCIONA
cart: function(req,res){
 res.render('./main/cart', { title: " CARRITO - MAG"}) 
} //    FUNCIONA


}