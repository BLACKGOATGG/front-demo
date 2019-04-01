/**
 * Created by BMM_lenovo on 2017/3/28.
 */

$.fn.extend({
	moveTop:function(){
		$(this).css("top","-=1px");
		/*if(-$(this).offset().top>$(this).innerHeight()/2){
            $(this).css("top","0");
        }*/
       console.log($(this).offset());
       console.log($(this).offset().top);
	}
})
