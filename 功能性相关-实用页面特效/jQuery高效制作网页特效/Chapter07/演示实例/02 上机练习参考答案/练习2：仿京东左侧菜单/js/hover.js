$(document).ready(function(){
    $("li").hover(
        function(){
            $(this).children("div").show();//让相应二级内容显示
            $(this).toggleClass("orange");
        },
        function(){
            $(this).children("div").hide();//让相应二级内容隐藏
            $(this).toggleClass("orange");
        }
    );
});