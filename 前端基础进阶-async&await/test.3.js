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
  const t = await fn();
  console.log(t);
  console.log('next code');
}

foo();

// result:
// 30
// next code


// 运行这个例子我们可以看出，当在async函数中，运行遇到await时，就会等待await后面的函数运行完毕，而不会直接执行next code。

const foo2 = () => {
  return fn().then(t => {
      console.log(t);
      console.log('next code2');    
  })
}

foo2();
/* 
如果我们直接使用then方法的话，想要达到同样的结果，就不得不把后续的逻辑写在then方法中。

很显然如果使用async/await的话，代码结构会更加简洁，逻辑也更加清晰。 
*/