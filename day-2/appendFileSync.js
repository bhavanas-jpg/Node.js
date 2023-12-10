let fs = require("fs");

try{
let new_content = "we are appending this file synchronously using node.js";
fs.appendFileSync('input.txt', new_content);
console.log("File Appended successfully");

}catch(err){
    console.error("Error is :" + err)
}
