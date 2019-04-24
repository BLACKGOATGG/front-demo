
// 4. RegExp.prototype.unicode 属性


// ===========================================================================
// 正则实例对象新增unicode属性，表示是否设置了u修饰符。

const r1 = /hello/;
const r2 = /hello/u;

r1.unicode // false
r2.unicode // true

// 上面代码中，正则表达式是否设置了u修饰符，可以从unicode属性看出来。

