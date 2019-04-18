;(function(s){
	//阻止默认事件
	document.addEventListener("touchmove",function(e){
		e.preventDefault()
	},{passive:false})
	s(function(){
	  //给li添加一个左滑动事件
	  s("#box li").swipeLeft(function(){
	  	//获取索引值
	  	var sind = s(this).index()+1;
	  	if(sind>=s("#box li").length){
	  		return;
	  	}
	  	//获取li宽度
	  	var swidth = s("#box li").width();
	  	s("#box ul")
	  	.css("transform","translateX("+-swidth*sind+"px)")
	  })
	})
})(Zepto)
