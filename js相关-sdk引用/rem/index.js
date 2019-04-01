window.onload=function(){
	var disignW=750;
	var fontsize=100;
	rem();
	function rem(){
		var deviceW=document.documentElement.clientWidth;  //获得页面的实际宽度
		console.log(deviceW);
		
		var radio=deviceW/disignW;    //0.5
		console.log(radio);
		
		var newFont=fontsize*radio*2;
		console.log(newFont);
		document.getElementsByTagName("html")[0].style.fontSize=newFont+"px";
	}
	window.addEventListener("resize",function(){
		setTimeout(rem,200);
	},false)
}
