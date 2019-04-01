/**
 * Created by zongjuan.wang on 2016/6/17.
 */

$(document).ready(function(){
    //用过滤选择器给h2设置背景颜色和字体颜色
     $(".contain :header").css({"background":"#2a65ba","color":"#ffffff"});


    var $newNode1=$("<li>你喜欢哪些冬季运动项目？</li>");
    //$(".gameList li:eq(2)").replaceWith($newNode1);
    $($newNode1).replaceAll(".gameList li:eq(2)");




    //li 最后一个 没有边框
    $(".gameList li:last").css("border","none");


});