const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('could not connect to server');
  }

  // console.log('connected to mongodb server');
  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   if(err){
  //     console.log('unable to fetch Todos',err);
  //   }
  // });

  console.log('connected to mongodb server');
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count : ${count}`);
  // },(err)=>{
  //   if(err){
  //     console.log('unable to fetch Todos',err);
  //   }
  // });

  db.collection('Users').find().toArray({name:'Kaif Jamadar'}).then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    if(err){
      console.log('Unabel to Todos', err);
    }
  });

  db.collection('Users').find({name:'Kaif Jamadar'}).count().then((count)=>{
    console.log(`Users : ${count}`);
  },(err)=>{
    if(err){
      console.log('Unabel to Todos', err);
    }
  });
//db.close();
});
