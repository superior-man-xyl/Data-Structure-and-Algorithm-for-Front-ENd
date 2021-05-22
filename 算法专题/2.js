class Queue {
    constructor() {
        this.stack = []
        this.nums = 0
    }
    task(delay, fn) {
      this.stack[delay] = fn
      return this
    }
    start() {
      for (const key in this.stack) {
        this.nums += +key
        const num = this.nums
        setTimeout(() => {
          this.stack[key]()
        }, num)
      }
    }
}