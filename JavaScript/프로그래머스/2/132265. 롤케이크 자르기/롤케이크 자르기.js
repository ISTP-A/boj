function solution(topping) {
    var answer = 0

    const left = new Set()
    const right = topping.reduce((acc, cur) => { 
        const value = acc[cur] || 0
        acc[cur] = value + 1
        return acc
    }, {})
    
    let rightSize = Object.keys(right).length

    for(let i = 0; i < topping.length - 1 && left.size <= rightSize; i++) {
        const t = topping[i] 
        left.add(t)
        right[t] -= 1
        
        if(right[t] <= 0) rightSize--
        
        if(left.size === rightSize) answer++
    }

    return answer
}