/* 
四、异常处理
在Promise中，我们知道是通过catch的方式来捕获异常。
而当我们使用async时，则通过try/catch来捕获异常。
*/
function fn(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof val == 'number') {
        resolve('this is number')
      }else{
        reject('this not number');
      }
    }, 1000);
  })
}

const foo = async () => {
  try {
    await fn(10).then((res)=>{
      console.log(res)
    });

    await fn("10").then((res)=>{    // 这里的promise对象如果有reject方法的回调函数就会执行这里的函数，反之执行catch里的内容
      console.log(res)
    });

    await fn("10").then((res)=>{    // 如果有多个await函数，那么只会返回第一个捕获到的异常。
      console.log(res)
    },(err)=>{
      console.log(err,1)
    });

  } catch (err) {
    console.log(err,2); // this not number
  }
}

foo();