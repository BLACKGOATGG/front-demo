var http = require("http");
var fs = require("fs");
var url = require("url")
http.createServer(function(req,res){
	//跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	//请求头
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	//获取请求路径
	var reqUrl = url.parse(req.url).pathname;
	//禁止小图标错误
	if(reqUrl == '/favicon.ico'){
	   	res.end();
	   	return;
	 }
	//读取文件
	switch (reqUrl){
		case "/nav":
		setData("../json/nav.json",res);
			break;
		case "/chongzhi":
		setData("../json/zhongzhi.json",res);
			break;
		case "/xinlishi":
		setData("../json/xinlishi.json",res);
			break;
		case "/crzc":
		setData("../json/crzc.json",res);
			break;
		case "/zishen": 
		setData("../json/zishen.json",res);
			break; 
		case "/zhichang": 
		setData("../json/zhichang.json",res);
			break;
		case "/wode" :   
			setData("../json/wode.json",res)
			break;
		case "/hr" :   
			setData("../json/hr.json",res)
			break;	
		case "/shouye1":   
			setData("../json/shouye1.json",res)
			break;
		case "/shouye2":   
			setData("../json/shouye2.json",res)
			break;
		case "/shouye3":   
			setData("../json/shouye3.json",res)
			break;
		default:
			break;
	}
}).listen(1243)
function setData(url,res){
	fs.readFile(url,"utf-8",function(err,data){
		if(err){
			throw err;
		}
		res.end(data)
	})
}
console.log("服务器启动成功")