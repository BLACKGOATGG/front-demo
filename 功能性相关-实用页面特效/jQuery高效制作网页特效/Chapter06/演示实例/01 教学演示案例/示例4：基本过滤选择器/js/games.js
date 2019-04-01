/**
 * Created by zongjuan.wang on 2016/6/17.
 */

$(document).ready(function(){
    //用过滤选择器给h2设置背景颜色和字体颜色
    $(".contain :header").css({"background":"#2a65ba","color":"#ffffff"});
    //li 最后一个 没有边框
    $(".contain li:last").css("border","none");

    //改变第一个li的字体大小和颜色
   // $(".contain li:first").css({"font-size":"16px","color":"#e90202"});
    //设置偶数行背景颜色
   // $(".contain li:even").css("background","#f0f0f0");
    //设置奇数行背景颜色
    //$(".contain li:odd").css("background","#cccccc");

    //设置前两个li的字体颜色（从0开始,小于2）
    $(".contain li:lt(2)").css({"color":"#708b02"});
    //设置后两个li的字体颜色（从0开始，大于3）
    $(".contain li:gt(3)").css({"color":"#b66302"});



    //改变第3个li的背景颜色（从0开始
    //$(".contain li:eq(2)").css({"background":"#02acaa"});


});