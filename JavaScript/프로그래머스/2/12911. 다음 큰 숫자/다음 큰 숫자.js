const MAX_COUNT = 1_000_000
    
function getOneCount(num) {
    const str = num.toString(2)
    return str.replaceAll('0', '').length
}

function findNextSameOneCount(n) {
    const nOneCount = getOneCount(n)
    for(let i = n + 1; i <= MAX_COUNT; i++) {
        const iOneCount = getOneCount(i)  
        if(nOneCount === iOneCount) return i
    }
    return -1
}

function solution(n) {
    return findNextSameOneCount(n)
}