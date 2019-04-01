const request = require("request");
const qs  = require("querystring");
const log4js  = require("../utils/log4js");
const { isTypeOf } = require("../utils");

const reg_get = /get/i;
const reg_query = /\?/;

class Ajax {
    constructor( opts ){
        this.propertys();
        this.setOpts( opts )
    }
    propertys(){
        this.contentType = "application/json";
        this.isSerialize = false;
        this.isParse = false;
        this.type = "GET";
        this.params = { };
        this.dataType = "json";
    }
    setOpts( opts = { } ){
        Object.assign( this, opts )
    }
    getParams(){
        return this.params;
    }
    updateParams( params ){
        if( isTypeOf( params ) == "object" ){
            Object.assign( this.params, params )
        }else{
            this.params = params;
        }
        return this;
    }
    updateUrlParams( url = "" ){
        let params = this.getParams();
        return url.replace(/\{[\w_\.]+\}/g, ( key ) => {
            key = key.replace(/[\{\}]*/g, "");
            return params[key];
        })
    }
    parse( params ){

        if( isTypeOf(params) == "string" ){
            try{
                return JSON.parse( params )
            }catch( e ){
                log4js.error(`传入参数有误${params}: ${e}`)
            }
        }
        return params;
    }
    serialize( params ){

        let temp = [ ];
        for( let key in params ){
            temp.push(`${key}=${encodeURIComponent( params[key] )}`)
        }
        return temp.join("&");
    }
    getOpts(rKey){

        const options = {
                "url" : this.updateUrlParams( this.url ),
                "method" : this.type,
                "json" : true,
                "headers" : (this.headers || { }),
                "contentType" : this.contentType,
                "timeout" : 10000,
            }, params = this.getParams(),
            isGet = reg_get.test( this.type ),
            isQuery = reg_query.test( this.url );

        if( isGet ){
            options.url += (isQuery ? "&" : "?") + qs.stringify( params ) + `&_t=${rKey}`;
        }else if( this.isSerialize ){
            options.body = this.serialize( params );
        }else if( this.isParse ){
            options.body = this.parse( params );
        } else {
            options.body = JSON.stringify( params )
        }

        return options;
    }
    async get( str ){
        return new Promise((resolve, reject ) => {
            const rKey = Math.random().toString(32).substr(2);
            const opts = this.getOpts( rKey );
            log4js.info(`\n====== 请求开始(${rKey}) ======\n ${JSON.stringify(opts)}`)
            request( opts, ( err, res, body ) => {
                log4js.info(`\n====== 请求响应(${rKey}) ======\n ${err}, ${JSON.stringify( body )} \n====== 请求结束(${rKey}) ======` )
                return resolve(this.handle( str, body ));
            })
        })
    }
    handle(str, data = { }){
        let parts;
        if (str) {
            parts = str.split('.');
            parts.every(( skey ) => {
                data = data[skey] !== null ? data[skey] : undefined;
                return isTypeOf(data) == "object" || isTypeOf(data) == "array";
            })
        }
        return data;
    }
}

module.exports = ( opts ) => {
    return new Ajax( opts );
}