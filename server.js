/*                                          //classwork 6
var http = require('http');
var express =require('express');
var app =express();
var server =http.Server(app);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});
app.get('/system/about',function(req,res){
  res.sendFile(__dirname+'/about.html');
});
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
*/
/*                                          //classwork7
var http = require('http');
var express =require('express');
var app =express();
var bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var server =http.Server(app);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});
app.get('/form',function(req,res){
  res.sendFile(__dirname+'/form.html');
});
app.post('/submit_user',function(req,res){
 console.log(req.body);
});
app.get('/system/about',function(req,res){
  res.sendFile(__dirname+'/about.html');
});
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });*/
                                          //classwork8
  
 /* var http = require('http');
var express =require('express');
var app =express();
var bodyParser =require('body-parser');

mongo.MongoClient.connect(uri,
{useNewUrlParser:true},
  function(err,client){
    if(err){
      console.log("could not connect to MongoDB");
    }else{
      db= client.db('simple-node');
    }
  });
var save=function (from_data){;
  db.createCollection('users',function(err,collection){});
  var collection=db.collection('users');
  collection.save(from_data);
  }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var server =http.Server(app);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});
app.get('/form',function(req,res){
  res.sendFile(__dirname+'/form.html');
});
app.post('/submit_user',function(req,res){
 console.log(req.body);
 save(req.body);
 res.status('200');
});
app.get('/system/about',function(req,res){
  res.sendFile(__dirname+'/about.html');
});
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });*/
  
                                        //classwork 9
  
var http = require('http');
var express =require('express');
var app =express();
var bodyParser =require('body-parser');
var mongoose =require('mongoose');
mongoose.connect("mongodb://localhost27017/node-cw8");
mongoose.connection.on('error',function(){
  console.log('could not connect to mongod');
});
//define user schema with mongoose
var userSchema=new mongoose.Schema({
  name:{
  type:String,
  required:"Name is required"
  },
  email:String
});
var User =mongoose.model('User',userSchema);
/*var mongoose = require('mongoose');
var db,uri="mongod://"+process.env.IP+":27017";
mongoose.connect(uri);
var userSchema= new Schema({
  
  
  name: String,
  username: {type:String,required:true,unique:true},
  email:{type:String,required:true},
});
var user =mongoose.model('User',userSchema);

*/
/*mongo.MongoClient.connect(uri,
{useNewUrlParser:true},
  function(err,client){
    if(err){
      console.log("could not connect to MongoDB");
    }else{
      db= client.db('node-cw8');
    }
  });*/
  
/*var save=function (from_data){;
  db.createCollection('users',function(err,collection){});
  var collection=db.collection('users');
  //db.userfrom_data.age=12;
  collection.save(from_data);
  }*/
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var server =http.Server(app);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});
app.get('/form',function(req,res){
  res.sendFile(__dirname+'/form.html');
});
app.post('/submit_user',function(req,res){
 console.log(req.body);
 //save(req.body);
 var new_user =new User(req.body);
 new_user.save(function(err,data){
   if(err)
     return res.status(400).json({nessage:"Could not save user"});
     res.status(200).json(data);
 
 //res.status('200');
})
});
app.get('/system/about',function(req,res){
  res.sendFile(__dirname+'/about.html');
});
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });