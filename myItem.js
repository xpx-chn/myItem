/**
 * Created by Administrator on 2017/1/8.
 */
var MyItem = MyItem || {};
//数组乱序
MyItem.shuffle = function (arr1) {
    var arr = arr1.slice();
    for (var x, j, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
};
//数组去重
MyItem.arrayIsNoRepeat = function (arr) {
    for (var i = 0, a = []; i < arr.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (arr[i] === a[j]) {
                break;
            }
        }
        j === a.length && a.push(arr[i]);
    }
    return a;
};
//事件监听函数
MyItem.addLoadEvent = function (func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
};
//随机生成一组不重复数字
MyItem.randomNumber = function (max, min, item) { //参数(最大值，最小值，数组项数(不能大于最大最小值的差值+1))
    if(item <= (max - min + 1)) {
        var nums = [];
        while(nums.length < item) {
            var n = parseInt(Math.random() * (max - min + 1) + min);
            for(var i = 0; i < nums.length; i++) {
                if(nums[i] == n) {
                    break;
                }
            }
            i === nums.length && nums.push(n);
        }
        return nums;
    } else {
        throw new Error("请输入正确范围的值");
    }
};
//创建dom方法
MyItem.dom = {};
//定义创建元素构造函数
MyItem.dom.Element = function (type, properties) {
    var temp = document.createElement(type);
    if (typeof properties === "object") {
        for (var key in properties) {
            if (properties.hasOwnProperty(key)) {
                temp.setAttribute(key, properties[key]);
            }
        }
    }
    return temp;
};
//定义创建文本节点构造函数
MyItem.dom.Text = function (text) {
    return document.createTextNode(text);
};
//dom => insertBefore
MyItem.dom.insertAfter = function (newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
};
//创建nameSpace方法
MyItem.namespace = function (name) {
    var parts = name.split(".");
    var current = MyItem;
    for (var i = 0; i < parts.length; i++) {
        if (!current[parts[i]]) {
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
};
MyItem.namespace("event");
MyItem.namespace("dom.style");
console.dir(MyItem);