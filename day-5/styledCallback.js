/***
 * Node.js styled callbacks ::
 * 
 * Node.js methods follows a idiomatic pattern which is known as Node.js style callback.
 * Following this pattern, we pass the callback function as an argument to the method .
 * When the execution of the operation is completed or an error is raised then the callback
 * function is called with error object, if there exists any error object otherwise the first
 * argument is passed as null
 * 
 */

const fs = require('fs');

function nSCallback(error, data){
    if(error){
        console.error('Error: ', error);
        return;
    }
    console.log(data);
}
fs.readFile('file_that_exists', nSCallback);
fs.readFile('file_does_not_exists', nSCallback);