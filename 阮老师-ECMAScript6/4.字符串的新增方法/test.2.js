// 2. String.raw()

// ===========================================================================
// ES6 还为原生的 String 对象，提供了一个raw()方法。
// 该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。

String.raw `Hi\n${2+3}!`;
// 返回 "Hi\\n5!"

String.raw `Hi\u000A!`;
// 返回 "Hi\\u000A!"


// 如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义。

String.raw `Hi\\n`
// 返回 "Hi\\\\n"


// ===========================================================================
// String.raw()方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。

// String.raw()方法也可以作为正常的函数使用。这时，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组。

String.raw({raw: 'test'}, 0, 1, 2);
// 't0e1s2t'

// 等同于
String.raw({raw: ['t', 'e', 's', 't']}, 0, 1, 2);
// 作为函数，String.raw()的代码实现基本如下。


// ===========================================================================
// 作为函数，String.raw()的代码实现基本如下。

String.raw = function (strings, ...values) {
    let output = '';
    let index;
    for (index = 0; index < values.length; index++) {
        output += strings.raw[index] + values[index];
    }

    output += strings.raw[index]
    return output;
}