const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
let books = [{
  "id": 1,  "title": "Introduction to Cybersecurity"
}, {
  "id": 2,  "title": "Cybersecurity"
}
]
app.get("/books",(req,res)=>{
 return res.json({books})
})
app.listen(8000,(req,res)=>{
  console.log(`Server is running on port 8000`)
})
// colon means dynamic
app.get("/books/:bookid",(req,res)=>{
 const id =req.params.bookid
 const book =books.find((e) => e.id ===Number(id))
 return res.json({book})
})
app.post("/books",(req,res)=>{
 const clientdata = req.body
 books.push(clientdata)
 res.json({status:"success"})

})
app.delete("/books/:bookid",(req,res)=>{
 const id =req.params.bookid
  books = books.filter((e) => e.id !==Number(id))
 return res.json({status:"deleted"})

})