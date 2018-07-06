const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('could not connect to server');
  }

  // db.collection('Todos').insertOne({
  //   text:'something to do here',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to perform Todos',err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });
  db.collection('Users').insertOne({
    name:'Kaif Jamadar',
    age:22,
    location:'Belgaum,Karnataka,India'
  },(err,result)=>{
    if(err){
      return console.log('Unable to perform Users',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

db.close();
});
