const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
// var message = 'hey there';

// // var hash = SHA256(message).toString();
//
// var data = {
//   id:4
// }
//
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data)).toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data)).toString();
//
// if(resultHash === token.hash)
// console.log('same');
var data = {
  id:10
}

var token = jwt.sign(data,'123abc');
console.log(token);
