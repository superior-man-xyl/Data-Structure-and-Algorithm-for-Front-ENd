let arr = 'You say that you love rain,but you open your umbrella when it rains:rain'.split(':');
let reg = new RegExp(`${arr[1]}xxx`,'g')
let arr2 = arr[0].match(reg);
console.log(arr2)