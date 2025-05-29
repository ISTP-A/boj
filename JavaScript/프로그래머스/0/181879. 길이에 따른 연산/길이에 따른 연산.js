function solution(num_list) {
    if(hasOverArrayLength(num_list, 10)) {
        return sumAllItems(num_list)
    }
    return mulAllItems(num_list)
}

function sumAllItems(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0)
}

function mulAllItems(arr) {
    return arr.reduce((acc, cur) => acc * cur, 1)
}

function hasOverArrayLength(arr, threshold) {
    return arr.length > threshold
}