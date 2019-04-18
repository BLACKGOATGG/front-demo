// 我们接下来重点总结第一个常用的应用场景：ajax。

// 关于ajax的简单使用和简单封装，我们在上面都已经讲过了，这里就不再多说，直接使用jquery封装好的方法即可。
// 而我们需要处理的问题在于，如何有效的将ajax的数据请求和数据处理分别放在不同的模块中进行管理，
// 这样做的主要目的在于降低后期维护成本，便于管理。

// 来看看怎么样简单操作的。

// 首先，将所有的url放在一个模块中统一处理。

// libs/API.js
define(function() {
    return {
        dayInfo: 'https://hq.tigerbrokers.com/fundamental/finance_calendar/get_day/2017-04-03',
        typeInfo: 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-03-26/2017-04-15'
    }
})

// 在实际开发中，url并不是直接通过字符串就能直接确认的，某些url还需要通过参数拼接等，这个时候需要我们灵活处理。