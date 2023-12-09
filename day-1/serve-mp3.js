var http = require("http");
var fs = require("fs");

http.createServer((request, response)=>{
response.writeHead(200, {"Content-Type": "audio/mp3"});
fs.exists('audio.mp3', (exists)=>{
    if(exists){
        var rstream = fs.createReadStream('audio.mp3');
        rstream.pipe(response);
    }else{
        response.end("Its a 404");
    }
});

}).listen(3000);