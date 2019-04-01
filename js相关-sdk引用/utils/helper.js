const CONF = require("../config");
const { isTypeOf } = require("../utils")
/**
 * == 保留指定位小数 ==
 * @param {*} num 
 * @param {*} len 
 */
exports.num = ( num = 0, len = 2 ) => {
    return Number(num).toFixed(len)
}

/**
 * == 补足前导0 ==
 * @param {*} num 
 * @param {*} len 
 */
exports.cover = ( num, len = 2 ) => {
    const str = new Array(len).join("0");
    return `${str}${num}`.slice(-len);
}

/**
 * == 手机号加密 ==
 * @param {*} phone 
 */
exports.phoneEncrypt = ( phone = "" ) => {
    return phone.replace(/(\d{3})\d{6}(\d{2})/g,'$1******$2');
}

/**
 * == 数字格千分制式化 ==
 * @param {*} n 
 * @param {*} m 
 */
exports.numberFormatter = (n, m) => {
    return Number(n) == n ? function(){
        m = isNaN(m) ? 2 : Math.abs(m);             //参数容错，默认保留2位小数,负数去符号
        var sign = n < 0 ? '-' : '';                //保存符号
        n = Math.abs(n).toFixed(m);                 //去符号
        return m ? function(){
                var numArr = n.split('.');              //带小数点才切    千分制正则：/\B(?=(?:\d{3})+(?!\d))/g
                return sign + numArr[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,',') + '.' + numArr[1];
            }() : sign + n.replace(/\B(?=(?:\d{3})+(?!\d))/g,',')       //否则直接格式化
    }() : 0;
}

/**
 * == 时间格式化 ==
 * @param {*} date 
 * @param {*} format 
 */
exports.date = (date = "", format = 'yyyy-MM-dd hh:mm:ss') => {
    if(!date) return '--';
    if(typeof date == 'string')
        date = date.replace(/-/g,'/');          //ie时间格式兼容
    date = new Date(date);
    var map = {
        "M": date.getMonth() + 1, //月份 
        "d": date.getDate(), //日 
        "h": date.getHours(), //小时 
        "m": date.getMinutes(), //分 
        "s": date.getSeconds(), //秒 
        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
};

/**
 * == 姓名打码 ==
 * @param {*} name 
 */
exports.nameEncrypt = (name = "" ) => {
    const regx = `${name.substr(1)}`, len = name.length;
    return name.replace(new RegExp(regx), new Array(len + 1).join("*"));
}

/**
 * == 身份证号打码 ==
 * @param {*} idcard 
 */
exports.idcardEncrypt = (idcard = "" ) => {
    const len = idcard.length;
    if(len == 18){
        return idcard.replace(/(\d{1})\d{16}([\dxX]{1})/g, "$1****************$2");
    }else if(len == 15){
        return idcard.replace(/(\d{1})\d{13}([\dxX]{1})/g, "$1*************$2");
    }else {
        return idcard;
    }
}

/**
 * == 数字简化 ==
 * @param {*} num   数值
 * @param {*} unit  单位
 */
exports.simplify = (num = 0, unit = "", len = 2) => {
    num = Math.floor(Math.abs(num));        	//去符号取整
    if(!num) return "0<em>" + unit + "</em>";    //判断是否为0

    let nums = ('' + num).split(/\B(?=(?:\d{4})+(?!\d))/g),
        units = ["", "万", "亿"],
        str = '', places = nums.length;

    for(let i = 0; i < len ; i++ ){
        str += Number(nums[i]) + "<em>" + units[places - i - 1] + (i == len - 1 ? unit : "") + "</em>";
    }
    return str;
}

/**
 * == app地址转pc地址 ==
 * @param {*} url
 */
exports.toPCUrl = ( url = "") => {
    if(/trc_app/ig.test(url))
        return url.replace(/\/trc_app/, "");
    else
        return url;
}

/**
 * == app地址转pc地址 ==
 * @param {*} url 
 */
exports.toPCHref = (url = "") => {
    if( /jrhelp/ig.test( url ) ){
        return url;
    }else{
        const arr = url.replace(/\.html/, "").split("-");
        return `${CONF.DOMAIN.HELP}/news/${arr[1]}/detail/${arr[2]}`;
    }
}

/**
 * == url 替换 ==
 * @param {*} regx 
 * @param {*} url 
 */
exports.toAbsoluteUrl = (regx, url = "", txt = "") => {
    return url.replace(regx, txt);
}

/**
 * == 数量简写 ==
 * @param {*} num 
 * @param {*} max 
 */
exports.count = ( num = 0, max = 9 ) => {
    return num > max ? `${max}+` : num;
}

/**
 * == 平台运营时间 ==
 * @param {*} date 
 */
exports.liveTime = ( date = "" ) => {

    const [ birthday, time = "00:00:00"] = date.split(" ");
    const birth = new Date( date );
    const now = new Date();

    //生日日期	
    const birthYear = birth.getFullYear();
    const birthMonth = birth.getMonth();
    const birthDate = birth.getDate();

    //今天日期
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDate = now.getDate();

    //是否已过生日
    const isBirth = nowMonth > birthMonth || ( nowMonth == birthMonth && nowDate >= birthDate );

    //获取上次生日年份
    const prevBirthYear = isBirth ? ( nowYear <= birthYear ? birthYear : nowYear) : nowYear - 1 ;
    
    const prev = +new Date(`${prevBirthYear}-${birthMonth + 1}-${birthDate} ${time}`);

    const year = prevBirthYear - birthYear;

    const days = Math.floor((+now - prev) / 86400000);
    
    return `${year}年${days}天`;
}