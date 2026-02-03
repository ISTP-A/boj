function solution(s) {
    return Array.from(
        new Set(
            s.slice(2, s.length - 2)
            .split("},{")
            .sort((a,b) => a.length - b.length)
            .map((v) => v.split(',').map(Number))
            .flat()
        )
    )
}