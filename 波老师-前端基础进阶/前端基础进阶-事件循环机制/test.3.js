// demo02
console.log('golb1');

setTimeout(function () {
    console.log('timeout1');
    process.nextTick(function () {
        console.log('timeout1_nextTick');
    })
    new Promise(function (resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function () {
        console.log('timeout1_then')
    })
})

setImmediate(function () {
    console.log('immediate1');
    process.nextTick(function () {
        console.log('immediate1_nextTick');
    })
    new Promise(function (resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function () {
        console.log('immediate1_then')
    })
})

process.nextTick(function () {
    console.log('glob1_nextTick');
})
new Promise(function (resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function () {
    console.log('glob1_then')
})

setTimeout(function () {
    console.log('timeout2');
    process.nextTick(function () {
        console.log('timeout2_nextTick');
    })
    new Promise(function (resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(function () {
        console.log('timeout2_then')
    })
})

process.nextTick(function () {
    console.log('glob2_nextTick');
})
new Promise(function (resolve) {
    console.log('glob2_promise');
    resolve();
}).then(function () {
    console.log('glob2_then')
})

setImmediate(function () {
    console.log('immediate2');
    process.nextTick(function () {
        console.log('immediate2_nextTick');
    })
    new Promise(function (resolve) {
        console.log('immediate2_promise');
        resolve();
    }).then(function () {
        console.log('immediate2_then')
    })
})
/* 
    golb1
    glob1_promise
    glob2_promise
    glob1_nextTick
    glob2_nextTick
    glob1_then
    glob2_then
    timeout1
    timeout1_promise
    timeout2
    timeout2_promise
    timeout1_nextTick
    timeout2_nextTick
    timeout1_then
    timeout2_then
    immediate1
    immediate1_promise
    immediate2
    immediate2_promise
    immediate1_nextTick
    immediate2_nextTick
    immediate1_then
    immediate2_then
*/
/* 
    console.log('golb1');
    console.log('glob1_promise');
    console.log('glob2_promise');
    console.log('glob1_nextTick');
    console.log('glob2_nextTick');    
    console.log('glob1_then')    
    console.log('glob2_then')
    console.log('timeout1');    
    console.log('timeout1_promise');
    console.log('timeout2');
    console.log('timeout2_promise');
    console.log('timeout1_nextTick');
    console.log('timeout2_nextTick');
    console.log('timeout1_then')
    console.log('timeout2_then')
    console.log('immediate1');
    console.log('immediate1_promise');
    console.log('immediate2');
    console.log('immediate2_promise');
    console.log('immediate1_nextTick');
    console.log('immediate2_nextTick');
    console.log('immediate1_then')
    console.log('immediate2_then')

*/