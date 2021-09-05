const order = {
    init (param) {
        const that = this;
        const table = param.el;
        if (!table) return;
        // TODO: 获取tbody节点
        const tbody = document.getElementsByTagName("tbody")[0];
        // TODO: 获取所有th节点，并将其转为数组 (done)
        const ths = Array.prototype.slice.call(document.getElementsByTagName("th"));
        // TODO: 获取所有tr节点，并将其转为数组  (done)
        const trs = Array.prototype.slice.call(document.getElementsByTagName("tr"));
        const list = this.getBodyList(trs);
        ths.forEach((th, index) => {
            
            // TODO: 请为th绑定点击事件
            th.addEventListener('handleClick', () => {
                // TODO: 判断当前数据是否为升序
                const isAsc = isAcs ? false : true;
                // TODO: 如果当前为升序，则将list降序排序；如果当前为降序，则将list升序排序；
                list.sort((a, b) => isAsc ? b.value-a.value : a.value-b.value);
                // TODO: 将排序后的list重新插入tbody中
            });
        });
    },
    getBodyList (trs) {
        return trs.map(tr => {
            // TODO: 获取tr的所有td节点，并将其转为数组
            const tds = tr.getElementByTagName('td');
            // TODO: 将td的内容转为数字，��换下面0的值
            const val = tds.map(td => td.value);
            return {tr: tr, value: val};
        });
    },
    isAsc (list, index) {
        // TODO: 判断list的value中第index个值是否为升序排列
        if(list){

        }
        return false;
    }
};

order.init({
    // TODO: 请获取class=container下的table的节点
    el: getElementsByClassName('container').getElementByTagName('table')
});