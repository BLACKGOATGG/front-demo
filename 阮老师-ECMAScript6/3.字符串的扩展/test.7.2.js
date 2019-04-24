// 7. 标签模板
// 模板字符串的功能，不仅仅是上面这些。

// ===========================================================================
// 下面是一个更复杂的例子。

let total = 30;
let msg = passthru `The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

msg // "The total is 30 (31.5 with tax)"

// 上面这个例子展示了，如何将各个参数按照原来的位置拼合回去。

// ===========================================================================
// passthru函数采用 rest 参数的写法如下。

function passthru(literals, ...values) {
  let output = "";
  let index;
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }

  output += literals[index]
  return output;
}


// ===========================================================================
// “标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。

let message =
  SaferHTML `<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

// 上面代码中，sender变量往往是用户提供的，经过SaferHTML函数处理，里面的特殊字符都会被转义。

let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = SaferHTML `<p>${sender} has sent you a message.</p>`;

message
// <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>


// ===========================================================================
// 标签模板的另一个应用，就是多语言转换（国际化处理）。

i18n `Welcome to ${siteName}, you are visitor number ${visitorNumber}!`
// "欢迎访问xxx，您是第xxxx位访问者！"


// ===========================================================================
// 模板字符串本身并不能取代 Mustache 之类的模板库，因为没有条件判断和循环处理功能，但是通过标签函数，你可以自己添加这些功能。

// 下面的hashTemplate函数
// 是一个自定义的模板处理函数
let libraryHtml = hashTemplate `
  <ul>
    #for book in ${myBooks}
      <li><i>#{book.title}</i> by #{book.author}</li>
    #end
  </ul>
`;


// ===========================================================================
// 除此之外，你甚至可以使用标签模板，在 JavaScript 语言之中嵌入其他语言。

jsx `
<div>
  <input
    ref='input'
    onChange='${this.handleChange}'
    defaultValue='${this.state.value}' />
    ${this.state.value}
 </div>
`
// 上面的代码通过jsx函数，将一个 DOM 字符串转为 React 对象。你可以在 GitHub 找到jsx函数的具体实现。


// ===========================================================================
// 下面则是一个假想的例子，通过java函数，在 JavaScript 代码之中运行 Java 代码。

java `
class HelloWorldApp {
  public static void main(String[] args) {
    System.out.println("Hello World!"); // Display the string.
  }
}
`
HelloWorldApp.main();


// ===========================================================================
// 模板处理函数的第一个参数（模板字符串数组），还有一个raw属性。

console.log`123`
// ["123", raw: Array[1]]

// 上面代码中，console.log接受的参数，实际上是一个数组。该数组有一个raw属性，保存的是转义后的原字符串。


// ===========================================================================
// 请看下面的例子。

tag`First line\nSecond line`

function tag(strings) {
  console.log(strings.raw[0]);
  // strings.raw[0] 为 "First line\\nSecond line"
  // 打印输出 "First line\nSecond line"
}


// 上面代码中，tag函数的第一个参数strings，有一个raw属性，也指向一个数组。

// 该数组的成员与strings数组完全一致。
// 比如，strings数组是["First line\nSecond line"]，那么strings.raw数组就是["First line\\nSecond line"]。

// 两者唯一的区别，就是字符串里面的斜杠都被转义了。
// 比如，strings.raw 数组会将\n视为\\和n两个字符，而不是换行符。

// 这是为了方便取得转义之前的原始模板而设计的。

