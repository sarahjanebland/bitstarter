var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buf = fs.readFileSync('index.html');
var bugger = new Buffer(buf);
var output = bugger.toString();


app.get('/', function(request, response) {
//  response.send('Hello World 2!');//
response.send(output);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
