let fs = require("fs");

let filename = 'content.txt';
try{
    let content = fs.readFileSync(filename ,"utf8");
    console.log('Content : ' + content);
}catch(err){
    console.error("Error reading file:", err);
}
