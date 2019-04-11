// src/test.js
console.log('your first module');

// test.js
const num = 20;
const arr = [1, 2, 3, 4];
const obj = {
    a: 0,
    b: function() {}
}
const foo = () => {
    const a = 0;
    const b = 20;
    return a + b;
}

export default {
    num,
    arr,
    obj,
    foo
}

// 在test.js中，我们使用export default对包暴露了一个对象。
// 他的意思就是当我们使用import test from './test'时，这个test对象就默认等于export default暴露的对象。

// 我们还可以在test.js中，仅仅通过export暴露几个方法与属性，我们来看看index.js中test会变成什么样子。

export const bar = () => {}
export const zcar = 12345;

// 保存运行后，我们发现，index.js中的test对象并没有变化，因为它仅仅等于export default抛出的对象，
// 因此，为了获得模块test.js暴露的所有接口，我们得通过如下的方式。

// import * as test from './test'
// 其中的 * 表示所有，这是比较常用的通配符，as表示别名，
// * as test的意思是将test.js暴露的所有接口组成的对象，命名为test。
