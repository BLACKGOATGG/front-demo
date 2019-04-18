/**
 * Created by BMM_lenovo on 2017/3/29.
 */
$.fn.extend({
    "scroll":function(){
        $(this).css("top","-=1px");
        if(-$(this).offset().top>=$(this).innerHeight()/2){
            $(this).css("top","0");
        }
    }
});
