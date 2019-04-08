// 我分别定义了aspectFill-x与aspectFill-y，通过判断不同的宽高比，来决定将他们中的其中一个加入到img标签的class中去即可。

// 获取图片的原始宽高，需要等到图片加载完毕之后才能获取。而当图片已经存在缓存时，则有一个compete属性变成true。那么我们就可以根据这些基础知识，定义一个模块来处理这件事情。

// components/imageCenter.js
define(function(require) {
    console.log(2.2)

    // 利用Promise封装一个加载函数，这里也是可以单独放在一个功能模块中进一步优化
    var imageLoad = function(img) {
        return new Promise(function(resolve, reject) {
            if (img.complete) {
                resolve();
            } else {
                img.onload = function(event) {
                    resolve(event);
                }

                img.onerror = function(err) {
                    reject(err);
                }
            }
        })
    }

    var imageCenter = function(domList, mode) {

        domList.forEach(function(item) {
            var img = item.children[0];
            var itemW = item.offsetWidth;
            var itemH = item.offsetHeight;
            var itemR = itemW / itemH;

            imageLoad(img).then(function() {
                var imgW = img.naturalWidth;
                var imgH = img.naturalHeight;
                var imgR = imgW / imgH;

                var resultMode = null;

                switch (mode) {
                    // 这样写是因为期待未来可以扩展其他的展示方式
                    case 'aspectFill':
                        resultMode = imgR > 1 ? 'aspectFill-x' : 'aspectFill-y';
                        break;
                    case 'wspectFill':
                        resultMode = itemR > imgR ? 'aspectFill-x' : 'aspectFill-y'
                        break;
                    default:
                }

                $(img).addClass(resultMode);
            })
        })
    }

    return imageCenter;
})
/* 
那么在使用时，直接引入这个模块并调用imageCenter方法即可。

// index.js
var imageCenter = require('imageCenter');
var imageWrapList = document.querySelectorAll('.img-center');
imageCenter(imageWrapList, 'wspectFill'); 
*/