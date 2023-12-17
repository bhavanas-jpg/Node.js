var fs = require('fs');
var fileName = 'data.html';
var str = fs.readFileSync(fileName).toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

var myarray = str.match(pattern);
var len = myarray.length;
console.log("Occurences of pattern in the string is"+ len);
