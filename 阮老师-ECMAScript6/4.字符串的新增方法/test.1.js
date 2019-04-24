// 1. String.fromCodePoint()

// ===========================================================================
// ES5 提供String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，但是这个方法不能识别码点大于0xFFFF的字符。

String.fromCharCode(0x20BB7)
// "ஷ"

// 上面代码中，String.fromCharCode()不能识别大于0xFFFF的码点，
// 所以0x20BB7就发生了溢出，最高位2被舍弃了，最后返回码点U+0BB7对应的字符，而不是码点U+20BB7对应的字符。


// ===========================================================================
// ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。
// 在作用上，正好与下面的codePointAt()方法相反。

String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true

// 上面代码中，如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。

// 注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。

