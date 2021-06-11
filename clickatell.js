var Clickatell = require('node-clickatell');
 
var click = new Clickatell({
  user : '[Your user]',
  password:'[Your password]',
  api_id : '[Your api ID]'
});
 
click.sendmsg("message to send",['ToPhoneNumber'],function(res){
  console.log(res); // ID: 4c640d23a882b331563a2a5dcab258a8
});