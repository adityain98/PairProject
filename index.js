const express = require('express')
const app = express()
const port = 3000

const userRoutes = require('./Routes/userRoutes')
const bookRoutes = require('./Routes/bookRoutes')

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('startbootstrap-shop-homepage-gh-pages')
})

app.use('/user', userRoutes)

app.use('/book', bookRoutes)

app.listen(port, ()=>{
    console.log('listening on port 3000');
})