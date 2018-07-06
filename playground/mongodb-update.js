// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('could not connect to server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   text:'study a lot'
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId("5b3ef6bb215c3f1952e1b80a")
  },{
    $inc :{
      age:7
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

//db.close();
});
