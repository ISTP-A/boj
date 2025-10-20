function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2]
    
    let p1 = 0
    let p2 = queue1.length
    
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0)
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)
    
    let cnt = 0
    while(cnt < queue.length * 2 + 1 && !isValidPointer(p1, p2)) {
        if(sum1 === sum2) return cnt
        
        if(sum1 < sum2) {
            sum1 += queue[p2]
            sum2 -= queue[p2]
            p2 = (p2 + 1) % queue.length
        }
        else {
            sum1 -= queue[p1]
            sum2 += queue[p1]
            p1 = (p1 + 1) % queue.length
        }
        
        cnt++
    }
    
    return -1
}

function isValidPointer(start, end) {
    return start === end
}