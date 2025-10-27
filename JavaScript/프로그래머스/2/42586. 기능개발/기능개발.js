function calcRemainingDays(progress, speed) {
    return Math.ceil((100 - progress) / speed)
}

function solution(progresses, speeds) {
    const answer = []
    const table = []
    
    for(let i = 0; i < progresses.length; i++) {
        table.push(calcRemainingDays(progresses[i], speeds[i]))
    }
    
    let count = 1
    let target = table[0]
    for(let i = 1; i < table.length; i++) {
        if(table[i] <= target) count++
        else {
            target = table[i]
            answer.push(count)
            count = 1
        }
    }
    answer.push(count)
    return answer
}