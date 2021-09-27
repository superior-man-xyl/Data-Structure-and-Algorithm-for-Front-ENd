const Highlight = {
    init(param) {
        const that = this;
        const input = param.input;
        const output = param.output;
        if (!input || !output) return;
        // TODO: 获取output的html内容
        const content = '';
        // TODO: 请为input绑定input事件，回调函数为_input

        function _input() {
            // TODO: 请获取input的值，并去除左右的空白字符
            const word = '';
            const result = that.mark(content, word);
            // TODO: 请将output的html替换为result
        }
    },
    mark(content, word) {
        word = (word || '').trim();
        if (!word) return content;
        // TODO: 请将content中和word匹配的全部内容用em标签包裹，比如： <em>word</em>，注意不要处理content中的标签字符
        return '';
    }
}
Highlight.init({
    // TODO: 请获取class=input的节点
    input: null,
    // TODO: 请获取class=content的节点
    output: null
});