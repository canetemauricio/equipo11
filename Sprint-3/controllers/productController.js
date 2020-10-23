module.exports = {

    show: function(req,res){
        res.send('Todos los Productos')
    },

    detail: function(req,res){
        res.render('./products/detail')
    }


} 