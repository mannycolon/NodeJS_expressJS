var module = require('./module');

module(process.argv[2], process.argv[3], function(err, list){
    if(err) return console.log(err)
    list.forEach(function(value){
        console.log(value);
    })
})