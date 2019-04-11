// src/index.js

// import './test'

// import test from './test'

// import * as test from './test'
// 其中的 * 表示所有，这是比较常用的通配符，as表示别名，
// * as test的意思是将test.js暴露的所有接口组成的对象，命名为test。

import test, { bar, zcar } from './test';
// 如果大家还记得前面一篇文章里，我所讲的ES6解析结构的语法，那么对于上面的用法相信就不难理解。

import $ from 'jquery'
import React, { Component } from 'react'

/* 
import表示引入一个模块，
test 我们暂时理解为引入模块的名字，
from表示从哪里引入
./test为./test.js的简写，表示将要引入模块的路径
*/

const app = document.querySelector('#root')
console.log(app)
app.innerHTML = '啊，全部被清空啦，准备工作终于做完了，可以开始学习ES6啦'


console.log(test)
console.log($)
console.log(React,Component)



// test，仍然表示为export default暴露的对象，而 { bar, zcar }则表示利用解析结构的语法，
// 从整个返回对象中去取得对应的接口。输出结果也就很清晰了。
console.log(test);
console.log('bar:', bar);
console.log('zcar:', zcar);


// 这种方式还是比较常见，比如我们在使用react时，常常这样使用：
// import React, { Component } from 'react'

// 它其实暗示了React的封装方式，也暗示了我们应该如何去封装我们的模块。
// 这里我们能够直接引入react的原因，是因为我们将它安装到了文件夹node_modules中，
// 该文件夹中安装的所有模块都可以这样直接引用。
// 例如我们安装一个jquery。

// 安装jquery
// > npm install jquery
// 然后在其他模块中就可以直接引入

// import $ from 'jquery'
// 这样，我们可以和往常一样使用jquery。
// 通过这样方式，我们还可以扩展更多的库，这就使得我们这个开发环境不仅仅能够用于react的开发，怎么用，完全取决与你自己。

// OK，ES6 模块的基础语法大概就这些吧，他告诉了我们在ES6中，一个模块应该如何对外暴露接口与如何引入其他模块暴露的接口，
// 这个知识点在实际开发中非常常用，因此虽然简单，但是不得不掌握，这也是大家进一步学习react或者vue的基础，
// 主要的难点大概在于本地开发环境的折腾，如果你是初次折腾这些，可能会遇到一些小问题，所以一定要有一点耐心。