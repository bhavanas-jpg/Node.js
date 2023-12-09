var http = require("http");
var fs = require("fs");

http.createServer((request, response)=>{
console.log("port number: 3000");
response.writeHead(200, {"Content-Type": "video/mp4"});
fs.exists('video.mp4', (exists)=>{
if(exists){
 var rstream = fs.createReadStream('video.mp4');
 rstream.pipe(response);
}else{
response.sendDate("Its a  404");
response.end();
}
});

}).listen(3000);