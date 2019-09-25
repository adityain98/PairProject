const Book = require('../models').Book
const UserBook = require('../models').UserBook
const User = require('../models').User

class BookController{
    static addBook(req, res){
        User.findOne({
            // where:{
            //     login: true
            // }
        })
            .then(data=>{
                return UserBook.create({
                    // UserId: data.id
                    // BookId: req.params.id    
                })
            })
            .then(()=>{
                res.redirect('/')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static cart(req, res){
        let name = ''
        User.findOne({
            where:{
                // login:true
                id:1
            }
        })
            .then(data=>{
                name = data.name
                return UserBook.findAll({
                    where:{
                        UserId: data.id
                    }
                })
            })
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.send(err)
            })
    }
}

module.exports = BookController