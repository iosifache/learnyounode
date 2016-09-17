var http = require('http');
var URLs = [process.argv[2], process.argv[3], process.argv[4]];
var GETs = ["", "", ""];
var i, j = 0;
URLs.forEach(function(element, i){
    http.get(element, function(response){
        response.setEncoding('utf8');
        response.on("data", function(data){
            GETs[i] += data;
        });
        response.on("error", function(error){
            GETs[i] += error;
        });
        response.on("end", function(){
            j = 0;
            GETs.forEach(function(element){
                if (element != "") j++;
            });
            if (j==3) GETs.forEach(function(element){
                console.log(element);
            });
        });
    });
});
