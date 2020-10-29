const bcrypt = require('bcrypt')
const fs= require('fs')
let users = require('../data/users.json')

module.exports = {

    login: function(req,res){
        res.render('./auth/login') 
    },

    register: function(req,res){
        res.render('./auth/register') 
    },

    validateLogin: function (req,res){

        let user = {
            email: req.body.email.toLowerCase(),
            password: bcrypt.hashSync(req.body.password,10)
        }
        
        //let UserJSON= fs.readFileSync('./data/users.json', {encoding:'utf-8'})

        // if(userJSON = ""){
        //     let userList = []
        // } else{
          
        //     let userList = JSON.parse(UserJSON)
        // }
        
        // let checkUser = users.filter(function(userList){
        //     return user.email = req.body.email
        // })
     
        // if(user == checkUser){
            console.log(user)
             res.redirect('/')
        // } else{
        //     res.send('Auth Failed. Try Again')
        // }

        
    },

    newUser: function(req,res){

        let user ={
            userName: req.body.UserName,
            email: req.body.UserEmail,
            password: bcrypt.hashSync(req.body.password,10)
        }
        console.log(user)
        res.redirect('/')
    }
   


} 
