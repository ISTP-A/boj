function solution(arr) {
    const [target, ...other] = arr.sort((a, b) => b - a)
    let sum = target
    while(true) {
        if(other.every(num => sum % num === 0)) return sum
        sum += target
    }
    
    return sum
}