// Jade has been renamed to Pug

// Create an Express.js app with a home page rendered by Jade template engine.

// The homepage should respond to /home.

// The view should show the current date using toDateString.

// -------------------------------------------------------------------------------

// ## HINTS

// The Jade template file index.jade is already provided:

//     h1 Hello World
//     p Today is #{date}.

// This is how to specify path in a typical Express.js app when the folder is
// 'templates':

//     app.set('views', path.join(__dirname, 'templates'))

// However, to use our index.jade, the path to index.jade will be provided as
// process.argv[3].  You are welcome to use your own jade file!

var path = require('path')
var express = require('express')
var app = express()
app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])