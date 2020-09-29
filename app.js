const { red } = require('color-name');
const express = require('express');
const app = express();
const path = require('path')

app.get('/', function (req,res){
    let file= path.resolve('public/vistas/index.html')
    res.sendFile(file)

})










app.listen(3000, () => {
console.log("MAG está escuchando en el puerto 3000")
})
