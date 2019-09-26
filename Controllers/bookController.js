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
            where:{
                id: req.session.user.id
            }
        })
            .then(data=>{
                // res.send(data)
                return UserBook.create({
                    UserId: req.session.user.id,
                    BookId: req.params.id    
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
        let books = ''
        User.findOne({
            where:{
                id: req.session.user.id
            }
        })
            .then(()=>{
                return User.findByPk(req.session.user.id, {
                    include: Book
                })
            })
            .then(userBooks=>{
                // res.send(userBooks)
                res.render('invoice', {userBooks})
            })
            // test
            .catch(err=>{
                res.send(err.message)
            })
    }

    static checkout(req, res){
        User.findOne({
            where:{
                id: req.session.user.id
            }
        })
            .then(()=>{
                return User.findByPk(req.session.user.id, {
                    include: Book
                })
            })
            .then(userBooks=>{
                // res.send(userBooks)
                res.render('checkout_page', {userBooks})
            })
            // test
            .catch(err=>{
                res.send(err.message)
            })
    }
}

module.exports = BookController