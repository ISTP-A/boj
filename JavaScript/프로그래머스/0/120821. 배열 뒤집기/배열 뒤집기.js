function reverseArray(numbers) {
    const result = []
    for(let i = numbers.length - 1; i >= 0; i--) {
        result.push(numbers[i])
    }
    return result
}

function solution(num_list) {
    return reverseArray(num_list)
}