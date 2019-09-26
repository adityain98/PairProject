const User = require('../models').User

class UserController{
    static registerUser(req, res){
        res.render('register')
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
        res.render('login')
    }

    static postLogin(req, res) {
        User.findOne({where: {email: req.body.email}})
        .then(user => {
            if(bcrypt.sompareSync(req.body.password, user.password)) {
                res.session.user = {id: user.id}
                res.redirect('/')
            } else {
                res.redirect('/login')
            }
        })
    }
}

module.exports = UserController