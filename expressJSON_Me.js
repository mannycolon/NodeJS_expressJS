var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
    var fileName = process.argv[3]
    fs.readFile(fileName, function(e, data) {
    if (e) return res.sendStatus(500)
    try {
      var books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])


// JSON ME
//  Exercise 8 of 8
// Write a server that reads a file, parses it to JSON and outputs the content
// to the user.
// The port is passed in process.argv[2].  The file name is passed in process.argv[3].
// Respond with:

//     res.json(object)

// Everything should match the '/books' resource path.
// ------------------------------------------------------------------------------
// ## HINTS
// For reading, there's an fs module, e.g.,
//     fs.readFile(filename, callback)
// While the parsing can be done with JSON.parse:
//     object = JSON.parse(string)
//  » To print these instructions again, run: expressworks print
//  » To execute your program in a test environment, run: expressworks run program.js
//  » To verify your program, run: expressworks verify program.js
//  » For help run: expressworks help
// Here's the official solution in case you want to compare notes:
// ────────────────────────────────────────────────────────────────────────────────
//     var express = require('express')
//     var app = express()
//     var fs = require('fs')
    
//     app.get('/books', function(req, res){
//       var filename = process.argv[3]
//       fs.readFile(filename, function(e, data) {
//         if (e) return res.send(500)
//         try {
//           books = JSON.parse(data)
//         } catch (e) {
//           res.send(500)
//         }
//         res.json(books)
//       })
//     })
    
//     app.listen(process.argv[2])
// ────────────────────────────────────────────────────────────────────────────────
