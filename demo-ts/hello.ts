
// TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
/* 
上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。
TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。 
*/

function sayHelloTwo(person: string) {
    return 'Hello, ' + person;
}

let userTwo = [0, 1, 2];
console.log(sayHelloTwo(userTwo));

/* 
编辑器中会提示错误，编译的时候也会出错：
index.ts(6,22): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

但是还是生成了 js 文件：
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = [0, 1, 2];
console.log(sayHello(user));

TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。
*/