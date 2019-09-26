const Book = require('../models').Book
const UserBook = require('../models').UserBook
const User = require('../models').User

class BookController{
    // tampilkan ke homepage
    static findAll(req, res){
        if(!req.query.id){
            Book.findAll()
                .then(books=>{
                    res.render('home', {books})
                })
        }
        // view book by category
        else{
            BookCategory.findAll({
                where: {
                    CategoryId: req.query.id
                },
                include: Book
            })
                .then(books=>{
                    res.render('home', {books})
                })
        }
    }

    // masukkan buku ke cart
    static addBook(req, res){
        User.findOne({
            // where:{
            //     login: true
            // }
        })
            .then(data=>{
                return UserBook.create({
                    // UserId: data.id,
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

    // menampilkan buku yang ada di cart
    static cart(req, res){
        User.findOne({
            where:{
                id: req.session.user.id
            }
        })
            .then(data=>{
                return UserBook.findAll({
                    where:{
                        UserId: data.id
                    }
                })
            })
            .then(data=>{
                res.send(data)
                res.render('invoice')
            })
            // test
            .catch(err=>{
                res.send(err)
            })
    }
}

module.exports = BookController