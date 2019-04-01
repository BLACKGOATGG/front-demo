var http = require("http");
var fs = require("fs");
function onRequest(request, response){
	 response.setHeader("Access-Control-Allow-Origin","*");//允许跨域
	 response.writeHead(200,{'Content-Type':'text/plain','charset':'utf-8'});
	 str=fs.readFileSync('js.json');
	 response.end(str);
}
http.createServer(onRequest).listen(8080);
console.log("成功");

