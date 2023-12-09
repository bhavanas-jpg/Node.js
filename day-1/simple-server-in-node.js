var http = require('http');

var host = '127.0.0.1';
var port =  3000;

var server = http.createServer((request,response)=>{
response.writeHead( 200 , {"Content-Type": "text/plain"});
console.log("server working");
response.end("Server working success");
})

server.listen(port,host, (error)=>{
    if(error) console.log("error occured: ", error);

    console.log("server is listening on" + host + ":" + port)
})