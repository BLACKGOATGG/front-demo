define(function (require, module, exports) {
    var _message = {
            networkErroe    : "网络错误，请稍后再试",
            serverError     : "服务器异常，请联系网站管理员处理",
            analysisError   : "数据解析异常"
        };
    return {
        error: function (err) {
            //服务端报错数据解析
            try{
                //正常报错信息处理
                err = JSON.parse(err.responseText); 						                                    //尝试转成json对象
                err["code"] = err["code"] || 408;                                                               //没有code,默认设置为408
                err["message"] = err.message || _message.networkErroe;                                          //没有描述信息，添加默认描述
            }catch (e){
                //异常报错信息处理
                err["code"] = 600;
                err["message"] = err.status >= 500 ? _message.serverError : _message.analysisError;				//无法转换设置默认对象
            }
            return err;
        },
        success: function (data) {
            //返回成功，数据解析（数据格式：{code:'',data:'',message:''}）;
            return (typeof data == 'object' && !data.length) ? data : function () {
                try{
                    return JSON.parse(data);
                }catch (e){
                    return {"code": 600, "data": "", "message": _message.analysisError};                           //自定义code 600-解析错误
                }
            }();
        },
        toJSON: function (data) {
            //返回成功，数据解析（数据格式：{code:'',data:'',message:''}）;
            return (!!data && typeof data == 'object') ? data : function () {
                try{
                    return JSON.parse(data);
                }catch (e){
                    return {"code": 600, "data": "", "message": _message.analysisError};                           //自定义code 600-解析错误
                }
            }();
        }
    }
})