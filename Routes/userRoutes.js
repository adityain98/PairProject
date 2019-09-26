const express = require('express')
const routes = express.Router()

const UserController = require('../Controllers/userController')


routes.use(express.json()) // for parsing application/json
routes.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


routes.get('/', UserController.registerUser)

routes.post('/', UserController.postRegisterUser)

routes.get('/login', UserController.login)
routes.post('/login', UserController.postLogin)

module.exports = routes