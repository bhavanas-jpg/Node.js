/**
 * Creating a regular expression
 * There are two ways for creating an regualr expression:
 * 1. By regular expression literals:
 * 2. By calling the constructor function
 * 
 */

var reg = /ab*/;
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.

var regExp = new RegExp('ab*');
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.

// Common Examples

//1.Finding specific text using Regular expression
var fs = require('fs');
var filename = 'data.txt';
var str = fs.readFileSync(filename).toString();
var pattern = /man/gim;
var myarray = str.match(pattern);
var len = myarray.length;
console.log("Occurences of pattern in the string is:" + len);

//2.Finding Number of tags using Regular expression



//3.Validating email using Regex.

//4.Validating hexadecimal number using regexp

//5.Validating password using regex