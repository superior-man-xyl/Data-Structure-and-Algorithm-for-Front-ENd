//堆排序
var len; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) { // 建立大顶堆
    len = arr.length;//
    for (var i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}
//使用数组的形式来做，具体只涉及最后叶子节点和顶点，以及顶点的左右子节点，
//就相当于数组的前三个值和最后一个值
function heapify(arr, i) { // 堆调整，//平衡二叉堆
    var left = 2 * i + 1,//根据树的特点，确定其的序号
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}