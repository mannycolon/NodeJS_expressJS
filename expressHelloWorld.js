 var express = require('express')
 var app = express()
 
app.get('/', function(req, res) {
  res.end('Hello World!')
  next()
})

app.get('*', function(req, res) {
  res.end('Manny')
})

app.listen(3000)