function isMultiple(num, n) {
    return num % n === 0
}
function solution(num, n) {
    const result = isMultiple(num, n)
    return Number(result)
}