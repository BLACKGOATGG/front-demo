/**
 * Created by zongjuan.wang on 2016/6/23.
 */

$(document).ready(function(){
    $("#nav li:first").bind("click",bg1=function(){
        $(".taskContent").css("background","#26a6e3");
    }).bind("click",content1=function(){
        $("#dayTask").show();
        $("#growTask").hide();
    });
    $("#nav li:last").bind("click",bg2=function(){
        $(".taskContent").css("background","#ff9400");
    }).bind("click",content2=function(){
        $("#dayTask").hide();
        $("#growTask").show();
    });
    /*$("#del").click(function(){
        $("#nav li:first").unbind("click", content1)
    });*/

    $("#del").click(function(){
        $("#nav li:first").unbind();
    });
})
