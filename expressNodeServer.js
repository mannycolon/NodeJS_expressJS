// node server using express
// Require the stuff we need
var express = require("express");
var logger = require("morgan");
var http = require("http");
// Build the app
var app = express();

app.use(logger());

// Add some middleware
app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello world!\n");
});

// Start it up!
http.createServer(app).listen(1337);