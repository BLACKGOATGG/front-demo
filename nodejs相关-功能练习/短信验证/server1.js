var http = require('http');

module.exports = function(ranCount,phone1){
	
	// 修改为您的短信账号     使用账号
	var account="N2149756";
	// 修改为您的短信密码     
	var password="wP3Lavl96";
	// 修改您要发送的手机号码，多个号码用逗号隔开
	var phone=phone1;
	// 修改为您要发送的短信内容
	var msg="【253云通讯】您的验证码是"+ranCount+"。老铁溜不溜。";
	// var msg="test";
	// 短请求地址请登录253云通讯自助通平台查看或者询问您的商务负责人获取
	var sms_host = 'smsbj1.253.com';
	// 发送短信地址
	var send_sms_uri = '/msg/send/json';
	// 查询余额地址
	var query_balance_uri = '/msg/balance/json';
	
	send_sms(send_sms_uri,account,password,phone,msg);
	
	query_blance(query_balance_uri,account,password);
	
	// 发送短信方法
	function send_sms(uri,account,password,phone,msg){
		
	    var post_data = { // 这是需要提交的数据 
	    'account': account,   
	    'password': password, 
	    'phone':phone,
	    'msg':msg,
	    'report':'false',
	    };  
	    var content =  JSON.stringify(post_data);  
	    post(uri,content,sms_host);
		
	}
	  
	// 查询余额方法
	function query_blance(uri,content,host){
		
	    var post_data = { // 这是需要提交的数据 
	    'account': account,   
	    'password': password, 
	    };  
	    var content = JSON.stringify(post_data);  
	    post(uri,content,sms_host);
	}
	  
	function post(uri,content,host){
		var options = {  
	        hostname: host,
	        port: 80,  
	        path: uri,  
	        method: 'POST',  
	        headers: {  
	            'Content-Type': 'application/json; charset=UTF-8', 
	        }  
	    };
	    var req = http.request(options, function (res) {  
	        console.log('STATUS: ' + res.statusCode);  
	        
	        res.setEncoding('utf8');  
	        res.on('data', function (chunk) {  
	            console.log('BODY: ' + chunk);  
	        });  
	    }); 
	   
	    req.write(content);  
	  
	    req.end();   
	} 
}





