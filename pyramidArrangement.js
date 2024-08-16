function pyramid(arr) {
    const size = (arr.length)
    sortedArr = arr.sort((a, b) => a - b)

    for (let i = 1; i <= size / 2; i++) {
        sortedArr.splice(size - i + 1, 0, sortedArr[i])
        sortedArr.splice(i, 1)
    }
    return sortedArr
}

arr = [1, 4, 3, 6, 8, 7, 9, 2, 5, 0, 12, 23, -1]
console.log(pyramid(arr));