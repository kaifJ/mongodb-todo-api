const {Todo} = require('./../server/models/todo');
const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Users} = require('./../server/models/users');

var id = '5b3f515498771b890ced3a59';

Todo.findByIdAndRemove('5b41c44f0ae0c533184936b4').then((todo)=>{
  console.log('removed ',todo);
});
