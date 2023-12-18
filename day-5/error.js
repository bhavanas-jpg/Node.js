/**
 * 
 * Asynchronous methods in node.js accepts an error object passed as the first argument
 * given that method should accept callbacks. These errors are handled in the following way.
 */

let fs =  require('fs');

fs.readFile('message.txt', (err, data)=>{
    if(err) return console.error(err);
    console.log("Content: "+ data);
})