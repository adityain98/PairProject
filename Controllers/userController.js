const User = require('../models').User
const bcrypt = require('bcrypt')

class UserController{
    static registerUser(req, res){
        res.render('registration_form')
    }

    static postRegisterUser(req, res){
        // create user
        const saltRounds = 10;
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
            .then(()=>{
                res.redirect('/')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static login(req, res) {
        // res.send('halo')
        res.render('login_form')
    }

    static postLogin(req, res) {
        User.findOne({where: {email: req.body.email}})
        .then(user => {
            // console.log('ini dari login');
            // res.send(user)
            console.log(user.id);
            
            if(bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {id: user.id}
                res.redirect('/')
            } else {
                res.redirect('/login')
            }
        })
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = UserController