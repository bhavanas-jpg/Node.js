
var http = require('http');
var fs = require('fs');

http.createServer((request, response)=>{
    if (request.url === '/') {
console.log("port number: 3000");
response.writeHead(200, {'Content-Type': "text/html"});

fs.readFile('index.html', (err,data)=>{
    if(err) throw err;
    console.log("Operation success");
    response.end(data);
})
    }
}).listen(3000);