var http = require("http");
var url = require("url");
var port = process.argv[2];


function parseTime(date) {
   return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
   }
};

function parseUnixTime(date){
  return {
    unixtime: date.getTime()
  }
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var date = new Date(parsedUrl.query.iso);
  var result
  if(parsedUrl.pathname == '/api/parsetime'){
    result = parseTime(date)
  }else if (parsedUrl.pathname == '/api/unixtime'){
    result = parseUnixTime(date)
  }
  
  if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(result))
      } else {
        response.writeHead(404)
        response.end()
      }
})

server.listen(port)


/*

Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/
