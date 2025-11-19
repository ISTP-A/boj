function compare(user_id, banned_id) {
    if (user_id.length !== banned_id.length) return false
    for (let i = 0; i < user_id.length; i++) {
        if (banned_id[i] === '*') continue
        if (user_id[i] !== banned_id[i]) return false
    }
    return true
}

function solution(user_id, banned_id) {
    const visited = Array(user_id.length).fill(false)
    const result = new Set()

    function backtrack(ban_index = 0, picked = []) {
        if (ban_index === banned_id.length) {
            const key = [...picked].sort().join(',')
            result.add(key)
            return
        }

        const ban = banned_id[ban_index]

        for (let i = 0; i < user_id.length; i++) {
            if (visited[i]) continue
            if (!compare(user_id[i], ban)) continue

            visited[i] = true
            picked.push(i)
            backtrack(ban_index + 1, picked)
            picked.pop()
            visited[i] = false
        }
    }

    backtrack()
    return result.size
}
