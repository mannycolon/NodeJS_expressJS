 var express = require('express')
 var app = express()
 
app.get('/home', function(req, res) {
  res.end('Hello World!')
  next()
})

app.get('*', function(req, res) {
  res.end('Manny')
})

app.listen(3000)
// app.listen(process.argv[2])
