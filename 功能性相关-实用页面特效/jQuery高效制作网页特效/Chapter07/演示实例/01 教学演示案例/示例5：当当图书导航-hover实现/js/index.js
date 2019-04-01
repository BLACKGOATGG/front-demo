$(document).ready(function(){
     $(".top-m .on").hover(function(){
			$(".topDown").show();
		},
		function(){
			$(".topDown").hide();
		}
	);


    /**主菜单鼠标移上时背景颜色加深**/
    $(".nav-ul a").mouseover(function(){
        $(this).css("background-color","#f01e28");
    });
    $(".nav-ul a").mouseout(function(){
        $(this).css("background-color","#ff2832");
    });

});