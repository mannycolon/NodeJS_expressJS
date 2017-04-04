// Apply static middleware to serve index.html file without any routes.

// Your solution must listen on the port number supplied by process.argv[2].

// The index.html file is provided and usable via the path supplied by
// process.argv[3]. However, you can use your own file with this content:

// ## HINTS

// This is how you can call static middleware:

//     app.use(express.static(path.join(__dirname, 'public')));

// For this exercise expressworks will pass you the path:

//     app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2])