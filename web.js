var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

buf = readFileSync('index.html');
var bugger = new Buffer(buf);
var output = bugger.toString();


app.get('/', function(request, response) {
//  response.send('Hello World 2!');//
response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
