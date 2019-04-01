$(document).ready(function(){
	/**导航头部我的当当 显示二级菜单 绑定悬浮 bind一个事件*
    $(".on").bind("mouseover",function(){
		$(".topDown").show();
	});*/

    /**bind 两个事件**/
     $(".top-m .on").bind({
		mouseover:function(){
			$(".topDown").show();
		},
		mouseout:function(){
			$(".topDown").hide();
		}
	});


    /**主菜单鼠标移上时背景颜色加深**/
    $(".nav-ul a").mouseover(function(){
        $(this).css("background-color","#f01e28");
    });
    $(".nav-ul a").mouseout(function(){
        $(this).css("background-color","#ff2832");
    });

});