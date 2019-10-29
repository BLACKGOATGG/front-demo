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
function sayHelloTwo(person) {
    return 'Hello, ' + person;
}
var userTwo = [0, 1, 2];
console.log(sayHelloTwo(userTwo));
