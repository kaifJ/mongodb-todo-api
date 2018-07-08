const {Todo} = require('./../server/models/todo');
const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Users} = require('./../server/models/users');

var id = '5b3f515498771b890ced3a59';

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log(todos);
// },(e)=>{
//   if(e)
//     console.log(e);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todos)=>{
//   console.log(todos);
// },(e)=>{
//   if(e)
//     console.log(e);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     console.log('Id not found');
//   }
//   console.log(`Todo : ${todo}`);
// }).catch((e)=>console.log(e));


Users.findById(id).then((user)=>{
  if(!user){
    console.log('User not found');
  }
  console.log('User ',user);
}).catch((e)=>console.log(e));
