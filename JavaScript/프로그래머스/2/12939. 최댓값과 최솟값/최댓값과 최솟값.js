function getMaxValue(arr) {
    return arr.sort((a, b)=> a - b).at(-1)
}

function getMinValue(arr) {
    return arr.sort((a, b)=> a - b)[0]
}
function solution(s) {
    const str_arr = s.split(" ").map(Number)
    const minValue = getMinValue(str_arr)
    const maxValue = getMaxValue(str_arr)
    
    return [minValue, maxValue].join(" ")
}