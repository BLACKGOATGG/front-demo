/**
 * Created by zongjuan.wang on 2016/6/15.
 */

$(document).ready(function(){
    $("dt").click(function(){   //获取<dt>标签并为其添加click事件函数
        $("dd").css("display","block"); //获取<dd>标签设置显示
    });

    $("h1").css("color","blue"); //获取并设置<h1>字体颜色为蓝色
    /* 获取并设置所有class为price的元素背景颜色和内边距 */
     $(".price").css({"background":"#efefef","padding":"5px"});
    /* 获取并设置id为author的元素字体颜色 */
      $("#author").css("color","#083499");
    /* 获取并设置所有<dt>、<dd>、class为intro的元素字体颜色 */
      $(".intro,dt,dd").css("color","#ff0000");
       $("*").css("font-weight","bold");//设置所有元素的字体加粗显示
})