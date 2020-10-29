module.exports = {

home: function(req,res){
    res.render('./main/index', {title: 'MAG - CADA PRENDA TIENE SU HISTORIA'})
},

cart: function(req,res){
    res.render('./main/cart', {title: ' CARRITO - MAG'})
}


}