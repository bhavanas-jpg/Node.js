let fs = require("fs");

let filename = "message.txt";
fs.unlink(filename, (err)=>{
    if(err) throw err;
    console.log("File deleted successfully");
})