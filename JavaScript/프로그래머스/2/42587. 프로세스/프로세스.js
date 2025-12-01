function solution(priorities, location) {
    const sorted = [...priorities].sort((a, b) => b - a)
    let sp = 0
    let cnt = 1
    
    while(0 < priorities.length) {
        const target = priorities.shift()
        if(target === sorted[sp]) {
            if(location === 0) return cnt
            sp++
            cnt++
        }
        else {
            priorities.push(target)
        }
        
        location = location - 1 >= 0 ? location - 1 :  priorities.length - 1
    }
    
    return cnt
}