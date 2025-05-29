function getSquareRootIfPerfect(n) {
    let i = 1;
    while ((i ** 2) <= n) {
        if (i ** 2 === n) return i
        i++
    }
    return -1
}

function isPerfectSquare(n) {
    return getSquareRootIfPerfect(n) !== -1
}

function evaluateSquare(n) {
    return isPerfectSquare(n) ? 1 : 2
}

function solution(n) {
    return evaluateSquare(n)
}