/**
 * Created by zongjuan.wang on 2016/6/16.
 */

$(document).ready(function(){
    //$("#news a[class]").css("background","#c9cbcb");  //带有class的属性
    //$("#news a[class='hot']").css("background","#c9cbcb");  //带有class的属性且值为hot
    //$("#news a[class!='hot']").css("background","#c9cbcb");  //class的属性且值不是hot
    //$("#news a[href^='www']").css("background","#c9cbcb");  //href值以www开头
    //$("#news a[href$='html']").css("background","#c9cbcb");  //href值以html结尾
    $("#news a[href*='k2']").css("background","#c9cbcb");  //href值包含k2
})