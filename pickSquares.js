function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num)
    return Math.floor(sqrt) === sqrt
}

function pickSquare(arr) {
    const perfectSquares = arr.filter(isPerfectSquare)
    perfectSquares.sort((a, b) => a - b)

    return perfectSquares;
}

const inputArray = [169, 145, 225, 211, 121, 183, 100, 111, 196, 214, 275];
const sortedPerfectSquares = pickSquare(inputArray);

console.log(sortedPerfectSquares);