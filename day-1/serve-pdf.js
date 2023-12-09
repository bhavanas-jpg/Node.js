var http = require("http");
var fs = require("fs");

http.createServer((request, response)=>{
    console.log("Port Number : 3000");
    response.writeHead(200, {"Content-Type": "application/pdf"});

    fs.readFile('index.pdf', (error, data)=>{
        if(error) response.json({"status": "error", msg: error})
        else{
    response.write(data);
    response.end();
    }
    })

}).listen(3000);