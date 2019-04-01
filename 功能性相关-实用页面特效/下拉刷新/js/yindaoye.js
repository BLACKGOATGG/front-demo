;(function($){
	//阻止默认事件
	document.addEventListener("touchmove",function(e){
		var e = e || window.event;
		e.preventDefault()
	},{passive:false})
	
	
	//加载完成之后执行
	$(function(){
		//
		var $width  = $("#box").width()
		//console.log($width)		
		$("#box li").swipeLeft(function(){
			//获取一下当前索引值
			var $index  = $(this).index()+1;	
			
			//倒数第二张图片   启动一次性计时器
			if($index == $("#box li").length-1){
				setTimeout(function(){
					//定向跳转    BOM
					window.location.href="周末作业.html"
				},4000)
			}
			
			//判断到最后一张图停止
			if($index >= $("#box li").length ){			
				//终止
				return ;		
				//定时跳转
			}
			
			//
			$("#box ul").css("transform","translateX("+-$index*$width+"px)");
			
		})
		
		
	})

})(Zepto)

//为什么打印出来的null 


