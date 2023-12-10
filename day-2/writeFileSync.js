let fs = require("fs");

let content = "We are writing this file synchronously using node.js";

fs.writeFileSync('message.txt', content);
console.log("File written successfully");