var express = require('express');
var bodyParse = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');
var {authenticate} = require('./middleware/authenticate');
const {ObjectID} = require('mongodb');

app = express();
var port = process.env.PORT || 3000;

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

app.delete('/todos/:id',(req,res)=>{
  if(!ObjectID.isValid(req.params.id)){
    res.status(404).send();
  }
  Todo.findByIdAndRemove(req.params.id).then((todo)=>{
    if(!todo){
      res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>res.status(400).send(e));
});

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }
  else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
    if(!todo){
      res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>res.status(400).send());

});

//post method for users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(()=>{
    return user.generateAuthToekn();
  }).then((token)=>{
    res.header('x-auth',token).send(user);
  }).catch((e)=>res.status(400).send(e));

});


//fetch authenticated user
app.get('/users/me',authenticate,(req,res)=>{
  res.send(req.user);
});

app.listen(port,()=>{
  console.log('Server running on port '+port);
});
