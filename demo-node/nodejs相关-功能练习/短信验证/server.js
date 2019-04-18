 var express = require("express");
 //随机数
 
 var ran = require("./random.js");
 
 
 var msg = require("./server1.js")
 
 var app = express()
 
 var ranCount ;
 app.get("/duxi",function(req,res){
 	res.setHeader("Access-Control-Allow-Origin","*");
 	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
 	console.log(req.query)	
 	ranCount = ran()
 	console.log(ranCount)
    msg(ranCount ,req.query.phone)	
 	res.end("ok")
 })
 
 app.get("/yzm",function(req,res){
 	res.setHeader("Access-Control-Allow-Origin","*");
 	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
 	if(req.query.yzm == ranCount){
 		res.end("亲！验证成功了")
 	}else{
 		res.end("失败")
 	}
 	
 })
 //第一个参数 随机数 ，第二参数电话号
 
 //手机号从前台传过来

 app.listen(7771)
