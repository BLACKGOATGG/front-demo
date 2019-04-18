var http = require("http");
var fs = require("fs");

http.createServer(function onRequest(request, response){
	 response.setHeader("Access-Control-Allow-Origin","*");
	fs.readFile('js.json',function(err,data){
		if(err==null){
			response.writeHead(200,{'Content-Type':'text/plain','charset':'utf-8'});
			response.end(data);
		}else{
			response.writeHead(404,{'Content-Type':'text/plain','charset':'utf-8'});
			response.end(err);
		}
	})
}).listen(8080);
console.log("成功");

