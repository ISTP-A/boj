function solution(elements) {
    var answer = 0;
    const hash = new Set()
    const arr = [...elements, ...elements]
    
    const len = elements.length
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j <= len; j++) {
            const sum =  arr.slice(j, j + i).reduce((acc, cur) => acc + cur, 0)
            hash.add(sum)
        }
    }
    return hash.size
}