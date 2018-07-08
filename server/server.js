var express = require('express');
var bodyParse = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');
const {ObjectID} = require('mongodb');

app = express();

app.use(bodyParse.json());

app.post('/todos',(req,res) => {
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.statud(400).send(e);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({
      todos
    });
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
      res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>res.status(400).send(e));

});

app.listen(3000,()=>{
  console.log('Server running on port 3000');
});
