var fs = require('fs');
var path = require('path');


module.exports = function(directory, extNameFilter, callback){
    var extension = '.' + extNameFilter
    fs.readdir(directory, function(err, list){
    if(err) return callback(err)
     var newList = list.filter(function(value){
         return path.extname(value) == extension;
     })
     callback(null, newList)
    })
}




