/**
 * Created by zongjuan.wang on 2016/6/17.
 */

$(document).ready(function(){
    //用过滤选择器给h2设置背景颜色和字体颜色
     $(".contain :header").css({"background":"#2a65ba","color":"#ffffff"});

    $(".gameList li").first().css("background","#b8e7f9").end().last().css("background","#d3f4b5");


    //li 最后一个 没有边框
    $(".gameList li:last").css("border","none");


});