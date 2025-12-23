function solution(msg) {
    let answer = []
    const dict = initDict()
    
    let word = msg[0]
    let i = 1
    while(i <= msg.length) {
        if(!dict.has(word + msg[i])) {
            answer.push(dict.get(word))
            dict.set(word + msg[i], dict.size + 1)
            word = msg[i]
        }
        else {
            word += msg[i]
        }
        i++
    }
    
    
    return answer;
}

function initDict() {
    const init = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const dict = new Map()
    
    for(let i = 0; i < init.length; i++) {
        dict.set(init[i], i+1)
    }
    
    return dict
}

function appendWord(dict, word) {
    return dict.set(word, dict.size+1)
}

