function isOverThreshold(target, threshold) {
    return target > threshold
}

function sumUntilThreshold(numbers, threshold) {
    let sum = 0
    for(let i = 0; i < numbers.length; i++) {
        if(isOverThreshold(sum, threshold)) break
        sum += numbers[i]
    }
    return sum
}

function solution(numbers, n) {
    var answer = sumUntilThreshold(numbers, n)
    return answer
}