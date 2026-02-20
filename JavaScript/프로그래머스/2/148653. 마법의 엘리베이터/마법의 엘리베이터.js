function solution(storey) {
    let answer = 0
    
    while(storey != 0) {
        const d = storey % 10
        storey = Math.floor(storey / 10)
        const next = storey % 10
        
        if(d > 5) {
            answer += 10 - d
            storey += 1
        }
        else if(d < 5) {
            answer += d
        }
        else {
            answer += 5
            if(next >= 5) {
                storey += 1
            }
        }
    }
    
    return answer
}