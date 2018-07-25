/*classwork 6
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
/*//classwork7
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
  var http = require('http');
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
  });