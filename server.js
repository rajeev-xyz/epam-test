/*
author: rajeev.jayaswal
website: www.rajeev.jayaswal.xyz
*/
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require("path");
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var input = require('./input.json');

/*TODO
1. connecting with database
2. add comment sections
3. user authentications
*/

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/articles', function(req, res) {
    res.send(input);
});

app.post('/section', function(req, res) {
  //console.log('and id post is ' + JSON.stringify(req.body));
  var len = input.length;
  id = req.body.id;
  var content = '';
  var title = '';
  for (var i=0;i<len;i++) {
    if (input[i] && input[i].id == id ){
      title = input[i]['title'];
      content = input[i]['content']; 
    }
  }
  //console.log('content is ' + content);
  if (content)
  res.send({'title':title,'content':content});
});

app.listen(3000, function() {
    console.log('listening on port ' + 3000);
});