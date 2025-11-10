function canExplore(fatigue, minFatigue, consumption) {
    return fatigue >= minFatigue && fatigue >= consumption
}

function solution(k, dungeons) {
    const exploreCounts = []
    
    function bfs(fatigue, dungeonIndex, visited, count = 1) {
        visited[dungeonIndex] = true
        fatigue -= dungeons[dungeonIndex][1]

        for (let i = 0; i < dungeons.length; i++) {
            const dungeon = dungeons[i]
            if (visited[i] || !canExplore(fatigue, ...dungeon)) continue;
            bfs(fatigue, i, [...visited], count + 1)
        }

        exploreCounts.push(count)
    }

    const visited = Array.from({ length: dungeons.length }, () => false)

    for (let i = 0; i < dungeons.length; i++) {
        bfs(k, i, [...visited], 1)
    }

    return Math.max(...exploreCounts)
}