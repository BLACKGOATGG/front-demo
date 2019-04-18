/**
 * Created by BMM_lenovo on 2017/3/28.
 */
(function($){
    $.fn.extend({
        "color":function(value){
                return this.css("color",value);
        },
        "border":function(value){
                return this.css("border",value);
        },
        "background":function(value){
                return this.css("background",value);
        }
    });
})(jQuery);

