;(function($){
	//阻止默认事件
	document.addEventListener("touchmove",function(e){
		e.preventDefault();
	},{passive:false})
	//
	$(function(){
		
		/*$("div").on("longTap",function(){
			console.log(1)
		})*/
		
		
		
	//	div.addEventListener("click",function(){},false)
	
		/*$("div").swipeLeft(function(){
			alert(1)
		})*/
		
		div.addEventListener("touchstart",function(){
			console.log(1)
		})
		div.addEventListener("touchend",function(){
			console.log(2)
		})
		div.addEventListener("touchmove",function(){
			console.log(33)
		})
	})
	
	//window.onload=function(){
		/*div.onclick=function(){
			alert(1)
		}
		div.onclick=function(){
			alert(2)
		}*/
		/*
		 * div.addEventListener("click",function(){
			alert(1)
		},false)
		div.addEventListener("click",function(){
			alert(2)
		},false)*/
		
	//}
})(Zepto)
