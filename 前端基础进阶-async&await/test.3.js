// 定义一个返回Promise对象的函数
function fn() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(30);
      }, 2000);
  })
}

// 然后利用async/await来完成代码
const foo = async () => {
  const t = await fn();   // 代码同步执行t函数执行完后执行t2再执行t3
  console.log(t);
  console.log('next code1');

  const t2 = await fn();
  console.log(t2);
  console.log('next code2');

  const t3 = await fn();
  console.log(t3);
  console.log('next code3');

}

foo();
console.log('next code');

// result:
// next code
// --1000ms after--
// 30
// next code1
// --1000ms after--
// 30
// next code2
// --1000ms after--
// 30
// next code3


// 运行这个例子我们可以看出，当在async函数中，运行遇到await时，就会等待await后面的函数运行完毕，而不会直接执行next code。

const foo2 = () => {
  return fn().then(t => {
      console.log(t,4);
      console.log('next code4');    
  })
}

foo2();
/* 
如果我们直接使用then方法的话，想要达到同样的结果，就不得不把后续的逻辑写在then方法中。

很显然如果使用async/await的话，代码结构会更加简洁，逻辑也更加清晰。 
*/