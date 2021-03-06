var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var greeting = fs.readFileSync("index.html").toString();
  response.send(greeting);
});

app.get('/img/*', function(request, response) {
  var greeting = fs.readFileSync('.' + request.url);
  response.send(greeting);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});