const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();
const todo = require("./models/todoModel");
const user = require("./models/userModels");

const mongoose = require("mongoose");



// Connect to the db
mongoose.connect("mongodb://localhost:27017/exampleDb",{ useNewUrlParser: true }, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

app.use(cors());
app.use(bodyParser.json());



app.post("/addToDo", (req, res, next) => { 
  
  const todoAdd =  new todo({
    title: req.body.title,
    name:   req.body.name , 
    date: req.body.date
  })
  todoAdd 
    .save() 
    .then(resolt => {
      res.status(201).json({
        message: " added successfully",
      });
    })
});
  app.get("/users", (req,res,next)=>{
    user.find().then(result=>{
        res.status(200).json(result)
    })
  }) 
  app.get("/listTOdo", (req,res,next)=>{
    todo.find().then(result=>{        
        res.status(200).json(result)
    })
  }) 
 


app.listen(PORT, function() {
  console.log("server started at port " + PORT); 

});

