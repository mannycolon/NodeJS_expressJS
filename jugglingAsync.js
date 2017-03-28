var http = require('http');
var bl = require("bl");
var results = [];

function printResults(index){
    for(var i = 0; i < 3; i++){
        console.log(results[i])
    }
}

function httpGet(index){
    http.get(process.argv[2 + index], function(response){
        response.pipe(bl(function (err, data) { 
          if(err) console.error(err);
          results[index] = data.toString();
          if(index == 2){
              printResults();
          }
        })) 
    })
}





for(var i = 0; i < 3; i++){
    httpGet(i);
}
