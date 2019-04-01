/**
 * Created by zongjuan.wang on 2016/6/15.
 */

$(document).ready(function(){
    //$(".textRight p").css("color","red"); //后代选择器
    //$(".textRight>p").css("color","red"); //子选择器
    // $("h1+p").css("text-decoration","underline");    //相邻元素选择器
    $("h1~p").css("text-decoration","underline");    //同辈元素选择器
})