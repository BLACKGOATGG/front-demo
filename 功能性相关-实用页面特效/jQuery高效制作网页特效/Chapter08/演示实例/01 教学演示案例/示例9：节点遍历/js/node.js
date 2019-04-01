/**
 * Created by zongjuan.wang on 2016/7/1.
 */


$(document).ready(function(){
    //遍历子节点
    /* var $section =$("section").children();
    alert($section.length);*/


    //获取同辈节点
    $("li:eq(1)").next().addClass("orange");
    //$("li:eq(1)").prev().addClass("orange");
   // $("li:eq(1)").siblings().addClass("orange");

    //获取前辈节点
    //$("li:eq(1)").parent().addClass("orange");
    //$("li:eq(1)").parents().addClass("orange");
});
