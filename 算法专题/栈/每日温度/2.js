/**
 * @param {number[]} T
 * @return {number[]}
 */
// 入参是温度数组
const dailyTemperatures = function (T) {
  const len = T.length // 缓存数组的长度 
  const stack = [] // 初始化一个栈   
  const res = (new Array(len)).fill(0) //  初始化结果数组，注意数组定长，占位为0
  for (let i = 0; i < len; i++) { //使用栈，就只需要使用一个循环
    // 若栈不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop() //出栈后，栈长度减一，造出循环递减效果
      // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
      res[top] = i - top
    }
    // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i)
  }
  // 返回结果数组
  return res
}