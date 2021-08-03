/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
//递归加Map
var copyRandomList = function (head, cachedNode = new Map()) {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {//要是以及录入过Map的就直接返回
        cachedNode.set(head, {
            val: head.val
        });
        Object.assign(cachedNode.get(head), {
            next: copyRandomList(head.next, cachedNode),//递归拷贝后面的
            random: copyRandomList(head.random, cachedNode)
        })
    }
    return cachedNode.get(head);
}