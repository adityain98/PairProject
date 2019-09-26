const express = require('express')
const routes = express.Router()

const BookController = require('../Controllers/bookController')

const loginSession = (req,res,next) => {
    if(req.session.user) {
        next()
    } else {
        res.redirect('/login');
    }
}

routes.use(express.json()) // for parsing application/json
routes.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


routes.get('/:id/addBook', loginSession, BookController.addBook)

routes.post('/:id/addBook', BookController.postAddBook)

routes.get('/cart', loginSession, BookController.cart)

// hapus yang ada di cart
routes.post('/cart', BookController.postCart)


module.exports = routes