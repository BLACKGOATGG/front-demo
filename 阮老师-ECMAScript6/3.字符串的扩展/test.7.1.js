// 7. 标签模板
// 模板字符串的功能，不仅仅是上面这些。

// ===========================================================================
// 它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。
// 这被称为“标签模板”功能（tagged template）。

alert`123`
// 等同于
alert(123)

// 标签模板其实不是模板，而是函数调用的一种特殊形式。
// “标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。

// 但是，如果模板字符里面有变量，就不是简单的调用了，而是会将模板字符串先处理成多个参数，再调用函数。

// ===========================================================================
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);

// 上面代码中，模板字符串前面有一个标识名tag，它是一个函数。
// 整个表达式的返回值，就是tag函数处理模板字符串后的返回值。


// --------------------------------------------------------
// 函数tag依次会接收到多个参数。

function tag(stringArr, value1, value2){
  // ...
}

// 等同于

function tag(stringArr, ...values){
  // ...
}

// tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，
// 也就是说，变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间，以此类推。

// tag函数的其他参数，都是模板字符串各个变量被替换后的值。
// 由于本例中，模板字符串含有两个变量，因此tag会接受到value1和value2两个参数。


// --------------------------------------------------------
// tag函数所有参数的实际值如下。
  // 第一个参数：['Hello ', ' world ', '']
  // 第二个参数: 15
  // 第三个参数：50

// 也就是说，tag函数实际上以下面的形式调用。

tag(['Hello ', ' world ', ''], 15, 50)


// --------------------------------------------------------
// 我们可以按照需要编写tag函数的代码。下面是tag函数的一种写法，以及运行结果。

let a = 5;
let b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return "OK";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Hello "
// " world "
// ""
// 15
// 50
// "OK"