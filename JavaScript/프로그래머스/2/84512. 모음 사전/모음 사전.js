function solution(word) {
    const hash = ['A','E','I','O','U']
    const memo = Array.from({ length: 5 }, (_, i) => 5 ** i)
    
    let count = 0
    for(let i = 0; i < word.length; i++) {
        let sum = memo.slice(0, 5-i).reduce((acc, cur) => acc + cur, 0)
        count += hash.findIndex(w => w === word[i]) * sum + 1
    }
    
    return count
}