const Book = require('../models').Book
const UserBook = require('../models').UserBook
const User = require('../models').User

// class BookController{
//     static addBook(req, res){
//         User.findOne({
//             // where:{
//             //     login: true
//             // }
//         })
//             .then(data=>{
//                 return UserBook.create({
//                     // UserId: req.query.id,
//                     // BookId: req.params.id    
//                 })
//             })
//             .then(()=>{
//                 res.redirect('/')
//             })
//             .catch(err=>{
//                 res.send(err)
//             })
//     }
// }

module.exports = BookController