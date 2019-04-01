/**
 * Created by zongjuan.wang on 2016/7/4.
 */


$(document).ready(function(){
   $("img").click(function(){
       $("li").each(function(){
           var str=$(this).text()+"<br>";
           $("section").append(str);
       })
   });
});
