const express = require('express')
const app = express()
const port = 3000

const userRoutes = require('./Routes/userRoutes')

app.set('view engine', 'ejs');

app.use('/user', userRoutes)

app.listen(port, ()=>{
    console.log('listening on port 3000');
})