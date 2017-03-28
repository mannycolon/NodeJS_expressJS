/* HTTP UPPERCASERER
 * Write an HTTP server that receives only POST requests and converts  
 * incoming POST body characters to upper-case and returns it to the client.  
 * Your server should listen on the port provided by the first argument to  
 * your program.  
 */

var http = require('http');
 var map = require('through2-map')  
    
var portNumber = process.argv[2];


var server = http.createServer(function callback(inStream, outStream){
  if(inStream.method !== 'POST'){
    return outStream.end('send me a POST request\n')
  }
 inStream.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase()  
     })).pipe(outStream) 
})

server.listen(portNumber)


 
/*
 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/