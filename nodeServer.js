// Require what we need
var http = require("http");

// Build the server
var app = http.createServer(function(request, response) {
  // Build the answer
  var answer = "";
  answer += "Request URL: " + request.url + "\n";
  answer += "Request type: " + request.method + "\n";
  answer += "Request headers: " + JSON.stringify(request.headers) + "\n";

  // Send answer
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(answer);
});

// Start that server, baby
app.listen(1337, "localhost");
console.log("Server running at http://localhost:1337/");