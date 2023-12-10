var fs = require("fs");

fs.readFileSync("content.txt", (error, data)=>{
if(error) throw error;
console.log("Content:"+ data);
})