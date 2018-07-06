// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('could not connect to server');
  }
  console.log('connected to mongodb server');

  db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
    console.log(result);
  });
//db.close();
});
