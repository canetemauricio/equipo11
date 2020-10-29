const products = require("../data/products.json");
module.exports = {

    show: function(req,res){
        res.render('./products/list', {title: "CATÁLOGO - MAG", products: products})
    },

    detail: function(req,res){
        res.render('./products/detail', {title: "DETALLE - MAG"})
    }


} 