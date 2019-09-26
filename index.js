const express = require('express')
const app = express()
const port = 3000

const Book = require('./models').Book
const Category = require('./models').Category


const userRoutes = require('./Routes/userRoutes')
const bookRoutes = require('./Routes/bookRoutes')
const session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    let booksData = null
    Book.findAll({
        include: Category
    })
        .then(books=>{
            booksData = books
            return Category.findAll({
                include: Book
            })
        })
        .then(categories=>{
            // res.send(categories)
            // res.send(booksData)
            res.render('startbootstrap-shop-homepage-gh-pages', {books: booksData, categories, login: req.session.user})
        })
})

app.use('/user', userRoutes)

app.use('/book', bookRoutes)

app.listen(port, ()=>{
    console.log('listening on port 3000');
})