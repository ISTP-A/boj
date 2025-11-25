function solution(n, computers) {
    const visited = Array(n).fill(false)
    let networkCount = 0

    function dfs(node) {
        visited[node] = true
        for (let next = 0; next < n; next++) {
            if (next !== node && computers[node][next] === 1 && !visited[next]) {
                dfs(next)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            networkCount++
            dfs(i)
        }
    }

    return networkCount
}
