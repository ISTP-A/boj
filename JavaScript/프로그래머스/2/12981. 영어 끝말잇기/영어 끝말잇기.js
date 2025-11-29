function solution(n, words) {
    var answer = [];

    const history = new Set()
    history.add(words[0])
    
    for(let i = 1; i < words.length; i++) {
        const lastWord = words[i-1]
        const word = words[i]
        if(history.has(word) || lastWord[lastWord.length-1] !== word[0]) {
            return [i % n + 1, Math.floor(i / n)+1]
        }
        history.add(word)
    }
    return [0, 0]
}