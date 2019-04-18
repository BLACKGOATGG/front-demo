var http = require("http");
var fs = require("fs");
function onRequest(request, response){
	 response.setHeader("Access-Control-Allow-Origin","*");//允许跨域
	
	 /*$postData=file_get_contents("php://input",true);*/
	fs.readFile('js.json',function(err,data){
		if(err==null){
			response.writeHead(200,{'Content-Type':'text/plain','charset':'utf-8'});
			response.end(data);
		}else{
			response.writeHead(404,{'Content-Type':'text/plain','charset':'utf-8'});
			response.end(err);
		}
	})
	
//	 str=fs.readFileSync('js.json');
//	 response.end(str);
}
http.createServer(onRequest).listen(8080);
console.log("成功");

