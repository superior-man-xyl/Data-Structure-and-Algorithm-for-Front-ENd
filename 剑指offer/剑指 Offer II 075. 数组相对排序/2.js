var relativeSortArray = function (arr1, arr2) {
    let arr = []
    const overArr = [...arr1]
    arr2.forEach(item => {
        arr1.forEach(ele => {
            if (item === ele) {
                arr.push(ele)
                overArr.splice(overArr.indexOf(ele), 1)
            }
        })
    })
    overArr.sort((a, b) => {
        return a - b
    })
    arr = arr.concat(overArr)
    return arr
};