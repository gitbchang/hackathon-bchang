var express = require('express');
var Expert = require('./models/Experts.js');
var app = express();

app.all('*',function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();}
);


app.get('/data', function (req, res) {
  //res.sendFile('data.json', {root: __dirname })
  Expert.find({}, function(err, docs) {
    if (!err){
        console.log("hello", docs);
        res.send(docs);
    } else {throw err;}
  });
});

// POST method route
app.post('/data', function (req, res) {
  res.sendFile('data.json', {root: __dirname })
});



console.log("hello world!");
app.listen(8080);
