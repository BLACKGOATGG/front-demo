;
(function () {
    // 这是一个私有属性，不需要被实例访问
    var transform = getTransform();

    function Drag(selector) {
        // 放在构造函数中的属性，都是属于每一个实例单独拥有
        this.elem = typeof selector == 'Object' ? selector : document.getElementById(selector);
        // 声明2个变量用来保存鼠标初始位置的x，y坐标
        this.startX = 0;
        this.startY = 0;
        // 声明2个变量用来保存目标元素初始位置的x，y坐标
        this.sourceX = 0;
        this.sourceY = 0;

        this.init();
    }

    // 原型
    Drag.prototype = {
        constructor: Drag,
        // 初始化
        init: function () {
            // 初始时需要做些什么事情
            this.setDrag();
        },
        // 获取当前元素的属性 稍作改造，仅用于获取当前元素的属性，类似于getName
        getStyle: function (property) {
            return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(
                this.elem, false)[property] : this.elem.currentStyle[property];
        },

        // 获取当前元素的位置信息，注意与之前的不同之处
        getPosition: function () {
            var pos = {
                x: 0,
                y: 0
            };
            if (transform) {
                var transformValue = this.getStyle(transform);
                if (transformValue == 'none') {
                    this.elem.style[transform] = 'translate(0, 0)';

                } else {
                    var temp = transformValue.match(/-?\d+/g);
                    pos = {
                        x: parseInt(temp[4].trim()),
                        y: parseInt(temp[5].trim())
                    }

                }

            } else {
                if (this.getStyle('position') == 'static') {
                    this.elem.style.position = 'relative';

                } else {
                    pos = {
                        x: parseInt(this.getStyle('left') ? this.getStyle('left') : 0),
                        y: parseInt(this.getStyle('top') ? this.getStyle('top') : 0)
                    }
                    
                }
            }

            return pos;
        },
        // 设置当前元素的位置
        setPosition: function (pos) {
            if (transform) {
                this.elem.style[transform] = 'translate(' + pos.x + 'px, ' + pos.y + 'px)';
            } else {
                this.elem.style.left = pos.x + 'px';
                this.elem.style.top = pos.y + 'px';
            }
        },
        // 绑定事件
        setDrag: function () {
            var self = this;
            this.elem.addEventListener('mousedown', start, false);
            // 绑定在mousedown上的回调，event为传入的事件对象
            function start(event) {
                // 获取鼠标初始位置
                self.startX = event.pageX;
                self.startY = event.pageY;

                // 获取元素初始位置
                var pos = self.getPosition();

                self.sourceX = pos.x;
                self.sourceY = pos.y;

                // 绑定
                document.addEventListener('mousemove', move, false);
                document.addEventListener('mouseup', end, false);
            }

            // 绑定在mousemove上的回调，event为传入的事件对象
            function move(event) {
                // 获取鼠标当前位置
                var currentX = event.pageX;
                var currentY = event.pageY;

                // 计算差值
                var distanceX = currentX - self.startX;
                var distanceY = currentY - self.startY;

                // 计算并设置元素当前位置
                self.setPosition({
                    x: (self.sourceX + distanceX).toFixed(),
                    y: (self.sourceY + distanceY).toFixed()
                })
            }

            // 绑定在mouseup上的回调，event为传入的事件对象
            function end(event) {
                document.removeEventListener('mousemove', move, false);
                document.removeEventListener('mouseup', end, false);
            }

        }
    }


    // 私有方法，仅仅用来获取transform的兼容写法
    function getTransform() {
        var transform = '',
            divStyle = document.createElement('div').style,
            transformArr = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform'],
            i = 0,
            len = transformArr.length;

        for (; i < len; i++) {
            if (transformArr[i] in divStyle) {
                return transform = transformArr[i];
            }
        }

        return transform;
    }

    // 一种对外暴露的方式
    window.Drag = Drag;
})();

// 优先引入jquery,通过自调用的匿名函数调用报错，匿名函数接受参数在函数内部访问不到，在外部可以，而在test.4可以函数内部正常访问，
/*  (function ($) {
    $.extend({
        becomeDrag: function (selector) {
            new Drag(selector);
            return this;
        }
    })
})(jQuery); */

// 挂载为工具方法   $.becomeDrag('target') 参数元素ID名字符串
jQuery.extend({
    becomeDrag: function (selector) {
        console.log(1)
        new Drag(selector);
        return this; // 注意：为了保证jQuery所有的方法都能够链式访问，每一个方法的最后都需要返回this，即返回jQuery实例
    }
})

// 挂载为实例方法     $('#target').becomeDrag() jq实例选择元素调用方法
jQuery.fn.extend({
    becomeDrag: function () {
        console.log(2)
        new Drag(this[0]);
        return this; // 注意：为了保证jQuery所有的方法都能够链式访问，每一个方法的最后都需要返回this，即返回jQuery实例
    }
})