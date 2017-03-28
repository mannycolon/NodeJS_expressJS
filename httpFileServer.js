// HTTP FILE SERVER
var http = require('http');
var fs = require("fs");
var portNumber = process.argv[2];
var fileLocation = process.argv[3];


var server = http.createServer(function callback(request, response){
  var src = fs.createReadStream(fileLocation)
  src.pipe(response)
})

server.listen(portNumber)

/*
 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/