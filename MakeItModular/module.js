var fs = require('fs');
var path = require('path');
module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, list){
        if (err) callback(err)
        else{
            ext = "." + ext;
            var array = [];
            list.forEach(function(element){
                if (path.extname(element) === ext) array.push(element);
            });
            return callback(null, array);
        };
    });
};
