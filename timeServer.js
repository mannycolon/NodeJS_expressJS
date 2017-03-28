var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; if(month < 10) {month = "0" + month;}
    var day = today.getDate(); if(day.length == 1) {day = "0" + day;}
    var hour = "" + today.getHours(); if(hour.length == 1) {hour = "0" + hour;}
    var minutes = today.getMinutes(); if(minutes.length == 1) {minutes = "0" + minutes;}
    
    var result = year + "-" + month + "-" + day + " " + hour + ":" + minutes + '\n';
    console.log(result)
    socket.end(result);
})

server.listen(port)


/*
var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
    */