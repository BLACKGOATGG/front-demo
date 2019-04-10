/* 
二、如何使用
async函数是Generator的一个语法糖。
如果你不知道Generator是什么函数也没有关系，我们只需要知道async函数实际上返回的是一个Promise对象即可。
*/
/* async function fn() {
  return 30;
} */

// 或者
const fn = async () => {
  return 30;
}

// 在声明函数时，前面加上关键字async，这就是async的用法。
// 当我们用console.log打印出上面声明的函数fn，我们可以看到如下结果：
console.log(fn());

/* 
// result
Promise = {
    __proto__: Promise,
    [[PromiseStatus]]: "resolved",
    [[PromiseValue]]: 30
}
*/

// 很显然，fn的运行结果其实就是一个Promise对象。因此我们也可以使用then来处理后续逻辑。
fn().then(res => {
    console.log(res);  // 30
})

/* 
  await的含义为等待。
  意思就是代码需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。
  这正是同步的效果。

  但是我们需要注意的是，await关键字只能在async函数中使用。
  并且await后面的函数运行后必须返回一个Promise对象才能实现同步的效果。

  当我们使用一个变量去接收await的返回值时，该返回值为Promise中resolve出来的值（也就是PromiseValue）。
*/