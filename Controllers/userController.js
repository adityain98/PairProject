const User = require('../models').User

class UserController{
    static registerUser(req, res){
        res.render('startbootstrap-shop-homepage-gh-pages/index')
    }

    static postRegisterUser(req, res){
        // create user
        User.create({
            // name: req.body.name,
            // email: req.body.email,
            // password: req.body.password
        })
            .then(()=>{
                res.redirect('/user')
            })
            .catch(err=>{
                res.send(err)
            })
    }
}

module.exports = UserController