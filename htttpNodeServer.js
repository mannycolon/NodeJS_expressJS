// Require what we need
var http = require("http");

// Build the server
var app = http.createServer(function(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.end("Hello world!\n");
});

// Start that server, baby
app.listen(1337, "localhost");
console.log("Server running at http://localhost:1337/");