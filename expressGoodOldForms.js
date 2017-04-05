var path = require('path')
var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function (req, res){
   res.end(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])


// 1. Instructions
//  Master Express.js and have fun!
// ─────────────────────────────────
//  GOOD OLD FORM
//  Exercise 4 of 8
// Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints backwards the str value.
// -------------------------------------------------------------------------------
// ## HINTS
// To handle POST request use the post() method which is used the same way as get():
//     app.post('/path', function(req, res){...})
// Express.js uses middleware to provide extra functionality to your web server.
// Simply put, a middleware is a function invoked by Express.js before your own
// request handler.
// Middlewares provide a large variety of functionalities such as logging, serving
// static files and error handling.
// A middleware is added by calling use() on the application and passing the
// middleware as a parameter.
// To parse x-www-form-urlencoded request bodies Express.js can use urlencoded()
// middleware from the body-parser module.
//     var bodyparser = require('body-parser')
//     app.use(bodyparser.urlencoded({extended: false}))
// Read more about Connect middleware here:
//   [https://github.com/senchalabs/connect#middleware](https://github.com/senchalabs/connect#middleware)
// The documentation of the body-parser module can be found here:
//   [https://github.com/expressjs/body-parser](https://github.com/expressjs/body-parser)
// Here is how we can flip the characters:
//     req.body.str.split('').reverse().join('')
// -------------------------------------------------------------------------------
// ## NOTE
// When creating your projects from scratch, install the body-parser dependency
// with npm by running:
//     $ npm install body-parser
// …in your terminal.
// Again, the port to use is passed expressworks to the application as process.argv[2].
//  » To print these instructions again, run: expressworks print
//  » To execute your program in a test environment, run: expressworks run program.js
//  » To verify your program, run: expressworks verify program.js
//  » For help run: expressworks help

// 2. Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var express = require('express')
//     var bodyParser = require('body-parser')
//     var app = express()
    
//     app.use(bodyParser.urlencoded({extended: false}))
    
//     app.post('/form', function(req, res) {
//       res.send(req.body.str.split('').reverse().join(''))
//     })
    
//     app.listen(process.argv[2])
