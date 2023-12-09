var http = require("http");

http.createServer((request, response)=>{
response.writeHead(200, {'Content-Type': "application/json"});
let json_response ={
    status: 200,
    message: "successful",
    result : ['Sunday',"Monday", "Tuesday", "Wednesday", "Thursday"],
   code: 2000
}
console.log("Server Running");
response.end(JSON.stringify(json_response));
}).listen(3000)