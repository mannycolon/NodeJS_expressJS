/**
 * Routing is a way to map different requests to specific handlers. 
 * In many of the above examples, we had a homepage and an about page 
 * and a 404 page. We'd basically do this with a bunch of if statements 
 * in the examples.
 * But Express is smarter than that. Express gives us something called 
 * "routing" which I think is better explained with code than with English.
 */

var express = require("express");
var http = require("http");
var app = express();

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/hello/:who", function(req, res) {
  res.end("Hello, " + req.params.who + ".");
  // Fun fact: this has security issues
});

app.get("*", function(request, response) {
  response.end("404!");
});

http.createServer(app).listen(1337);