let fs = require("fs");

try{
let filename="newData.txt";
fs.unlinkSync(filename);
console.log("File deleted successfully");
}catch(error){
    console.error(error)
}