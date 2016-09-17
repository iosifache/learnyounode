var fs = require('fs');
var fsBuffer = fs.readFileSync(process.argv[2]);
var text = fsBuffer.toString();
var split = text.split("\n");
var numberOfWhiteSpaces = split.length - 1;
console.log(numberOfWhiteSpaces);
