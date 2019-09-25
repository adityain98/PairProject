const express = require('express')
const routes = express.Router()

const BookController = require('../Controllers/bookController')


routes.use(express.json()) // for parsing application/json
routes.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


routes.get('/:id/addBook', BookController)


module.exports = routes