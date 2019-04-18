define(['./data.analysis'], function (analysis) {

    var arr = [], scope, _slice = arr.slice;
    var reg_get = /get/i;
    var reg_rquery = /\?/;

    var xhrQueue = {};      //ajax请求队列

    function proxyQuest(opts) {
        this.init(opts);
    }

    //name -> scope key
    proxyQuest.prototype.init = function (opts) {
        this.type = 'get';
        this.contentType = "application/json";
        this.loading = false;
        this.params = {};
        $.extend(this, opts);
    }

    proxyQuest.prototype.setParams = function (params) {
        var QString = [];
        for(var key in params){
            QString.push(key + '=' + params[key]);
        }
        return QString.join("&");
    }

    proxyQuest.prototype.getParam = function () {
        return this.params;
    }

    proxyQuest.prototype.updateParams = function (params) {
        if(typeof params === "string"){
            this.params = params;
        }else{
            $.extend(this.params, params);
        }
        return this;
    }

    proxyQuest.prototype.get = function (str, callback) {

        if(typeof str === "function"){
            callback = str;
            str = null;
        }

        var self = this,
            params = self.getParam(),
            type = self.type,
            contentType = self.contentType,
            isGet = reg_get.test(self.type),
            url = self.url,
            options = {
                url: url,
                type: type,
                contentType: contentType,
                beforeSend: function(){
                    self.module && xhrQueue[self.module] && xhrQueue[self.module].abort();
                },
                complete: function(xhr, ts) {
                    var data = analysis.toJSON(xhr.responseText);
                    callback && callback(handle(str, data), arguments);
                }
            };

        // 根据传过来params类型添加时间戳
        if(typeof params === 'string'){
            params += "&_t=" + Math.random()
        }else{
            $.extend(params, {_t: Math.random()});
        }

        if(isGet){
            options.url +=  (reg_rquery.test(url) ? "&" : "?") + self.setParams(params);
        }else{
            $.extend(options, {data: params});
        }
        var key = self.module || Math.random().toString(32).substr(2);
        xhrQueue[key] = $.ajax(options);
    }

    function handle(str, data) {
        var parts;

        if (str) {
            parts = str.split('.');
            $.each(parts, function (i, n) {
                data = data[n];
            })
        }
        return data || {};
    }

    return function (opts) {
        return new proxyQuest(opts);
    };
})