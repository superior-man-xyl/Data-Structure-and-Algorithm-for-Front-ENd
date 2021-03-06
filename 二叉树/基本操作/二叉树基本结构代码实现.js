//二叉查找树的实现
//结点的构造函数
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}
//结点的原型函数
Node.prototype = {
    show: function () {
        console.log(this.data);
    }
}
//树的构造函数
function Tree() {
    this.root = null;
}
//树的原型函数
Tree.prototype = {
    //插入方法
    insert: function (data) {
        var node = new Node(data, null, null);
        if (!this.root) {//判断是否为空树
            this.root = node;//是就将node作为根节点
            return;//不在往下运行
        }
        var current = this.root;//curent：当前结点
        var parent = null;
        while (current) {
            parent = current;
            if (data < parent.data) {//二分查找树的特性，左边放小的，右边放大的
                current = current.left;
                if (!current) {//判断左结点是否为空
                    parent.left = node;
                    return;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = node;
                    return;
                }
            }

        }
    },
    //前序遍历
    preOrder: function (node) {
        if (node) {
            node.show();
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    },
    //中序遍历
    middleOrder: function (node) {
        if (node) {
            this.middleOrder(node.left);
            node.show();
            this.middleOrder(node.right);
        }
    },
    //后序遍历
    laterOrder: function (node) {
        if (node) {
            this.laterOrder(node.left);
            this.laterOrder(node.right);
            node.show();
        }
    },
    //获得最小值
    getMin: function () {
        var current = this.root;
        while(current){
            if(!current.left){
                return current;
            }
            current = current.left;
        }
    },
    //获得最大值
    getMax: function () {
        var current = this.root;
        while(current){
            if(!current.right){
                return current;
            }
            current = current.right;
        }
    },
    //获得树的深度
    getDeep: function (node,deep) {
        deep = deep || 0;
        if(node == null){
            return deep;
        }
        deep++;
        var dleft = this.getDeep(node.left,deep);
        var dright = this.getDeep(node.right,deep);
        return Math.max(dleft,dright);
    },
    //二分查找树
    getNode: function (data, node) {
        if (node) {
            if (data === node.data) {
                return node;
            } else if (data < node.data) {
                return this.getNode(data,node.left);
            } else {
                return this.getNode(data,node.right);
            }
        } else {
            return null;
        }
    }

}

var t = new Tree();
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);
// t.middleOrder(t.root);
console.log(t.getMin(), t.getMax());
// console.log(t.getDeep(t.root, 0));
// console.log(t.getNode(5,t.root));
