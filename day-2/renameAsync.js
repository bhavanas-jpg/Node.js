var fs = require("fs");

fs.rename('input.txt', "new_data.txt", (err)=>{
    if(err) throw err;
    console.log("File renamed successfuly");
})
console.log("This method is Asynchronous");