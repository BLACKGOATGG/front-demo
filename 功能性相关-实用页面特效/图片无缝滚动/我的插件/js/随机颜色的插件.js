/**
 * Created by BMM_lenovo on 2017/3/28.
 */
$.fn.extend({
	//
    "randColor":function(){
        var r = parseInt(Math.random()*256);
        var g = parseInt(Math.random()*256);
        var b = parseInt(Math.random()*256);
        $(this).css("background","#"+Math.ceil(Math.random()*0xffffff).toString(16));
    }
});
