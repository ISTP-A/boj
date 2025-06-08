function findAnswer(array, command) {
    const [start, end, point] = command
    const sorted = array.slice(start-1, end).sort((a, b) => a - b)
    return sorted[point-1]
}

function solution(array, commands) {
    return commands.map(command => findAnswer(array, command))
}