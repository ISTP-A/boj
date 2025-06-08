function solution(numbers) {
    const sorted = numbers.map(String).sort((a, b) => (b + a) - (a + b))
    return sorted[0] === '0' ? '0' : sorted.join('')
}