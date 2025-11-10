function canExplore(fatigue, minFatigue, consumption) {
    return fatigue >= minFatigue && fatigue >= consumption
}

function solution(k, dungeons) {
    let maxCount = 0
    const visited = Array(dungeons.length).fill(false)
    
    function backtrack(fatigue, count = 1) {
         maxCount = Math.max(maxCount, count)

        for (let i = 0; i < dungeons.length; i++) {
            const [minFatigue, consumption] = dungeons[i]
            if (visited[i] || !canExplore(fatigue, minFatigue, consumption)) continue
            
            visited[i] = true
            backtrack(fatigue - consumption, count + 1)
            visited[i] = false
        }
    }

    backtrack(k, 0)
    
    return maxCount
}
