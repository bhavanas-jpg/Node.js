var fs = require("fs");
var content = "This is content in message file";

fs.writeFile("message.txt",  content,(err)=>{
    if(err) throw  err;
    console.log("It's saved!");
})