function solution(elements) {
    const n = elements.length
    const arr = elements.concat(elements)
    const prefix = Array(arr.length + 1).fill(0)
    
    for(let i = 0; i < arr.length; i++) {
        prefix[i + 1] = arr[i] + prefix[i]
    }
    
    const sums = new Set()
    for (let len = 1; len <= n; len++) {
        for (let start = 0; start < n; start++) {
            const sum = prefix[start + len] - prefix[start]
            sums.add(sum)
        }
    }

    return sums.size
}
