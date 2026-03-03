function isPrime(num) {
    if(num < 2) return false
    
    for(let i = 2; i <= num / 2; i++) {
        if(num % i === 0) return false
    }
    
    return true
}

function concat(n1, n2) {
    return +`${n1}${n2}`
}

function pilfer(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index+1)]
}

function solution(numbers) {
    const hash = new Set()
    
    const dfs = (num, arr) => {
        if(isPrime(num)) hash.add(num)
        
        for(let i = 0; i < arr.length; i++) {
            dfs(concat(num, arr[i]), pilfer(arr, i))
        }
    }
    
    dfs(0, numbers)

    return hash.size;
}