function normalize(str) {
    var obj = {};
    if (str.indexOf('[') == -1) { //判断两种字符串，并分别处理
        obj.value = str;
        return obj;
    } else {
        var parts = str.split('[');
        parts.shift(); //生成的数组中，第一个元素为空，需删除
        var len = parts.length;
        obj.value = parts[len - 1].slice(0, len); //最小的子类对象出现
        parts.pop(); //删除数组最后一个元素，它比较特殊，所以特殊处理
        for (var i = parts.length - 1; i >= 0; i--) { //把剩余的循环“递归”
            obj = handleArr(parts, obj);
            parts.pop();
        }
        return obj;
    }
}

function handleArr(arr, obj) {
    var o = {};
    var len = arr.length;
    o.value = arr[arr.length - 1];
    o.children = obj;
    return o;
}

console.log(normalize('[abc[bcd[def|xxx]]]'))
console.log(normalize('[abc[bcd[def]]]'))