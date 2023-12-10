let fs= require("fs");

try{
    fs.renameSync('input.txt', "newData.txt");
    console.log("File named successfully");
}catch(error){
    console.error(error)
}


console.log("This method is synchronous");