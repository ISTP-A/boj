function solution(prices) {
    const answer = Array(prices.length).fill(0)
    
    for(let i = 0; i < prices.length; i++) {
        for(let j = i+1; j < prices.length; j++) {
            answer[i]++
            if(prices[i] > prices[j]) {
                break
            }
        }
    }
    
    return answer
}