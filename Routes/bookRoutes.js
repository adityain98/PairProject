const express = require('express')
const routes = express.Router()

const BookController = require('../Controllers/bookController')


routes.use(express.json()) // for parsing application/json
routes.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// tambahkan ke cart
routes.get('/:id/addBook', BookController.addBook)

// melihat daftar cart
routes.get('/cart', BookController.cart)

// hapus yang ada di cart
routes.post('/cart', BookController.postCart)


module.exports = routes