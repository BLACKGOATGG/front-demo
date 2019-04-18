exports.isTypeOf = ( val ) => {
    const type = toString.call(val);
    switch(type){
        case "[object Error]": 
            return "error";
        case "[object Array]": 
            return "array";
        case "[object RegExp]": 
            return "regExp";
        case "[object Number]": 
            return "number";
        case "[object Object]": 
            return "object";
        case "[object String]": 
            return "string";
        case "[object Boolean]": 
            return "boolean";
        case "[object Function]": 
            return "function";
        case "[object Undefined]": 
            return "undefined";
        default : 
            return "null";
    }
};


/**
 * == 将数组值映射到指定key对象下 ==
 * @param {*} keys 
 */
exports.mapKeyVal = ( ...keys ) => {
    return ( arr ) => {
        return keys.reduce(( obj, key, index ) => {
            obj[key] = arr[index];
            return obj;
        }, { });
    }
}