function solution(s) {
    var answer = 0
    for(let i = 0; i < s.length; i++) {
        if(validateBrackets(rotateString(s, i))) answer++
    }
    return answer
}

function rotateString(str, pointer) {
    return str.slice(pointer) + str.slice(0, pointer)
}

// brackets
const matchedbrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
}

function validateBrackets(str) {
    const stack = []
    
    for(let i = 0; i < str.length; i++) {
        const open = matchedbrackets[str[i]]
        if(!open) stack.push(str[i])
        else if(open !== stack.pop()) return false
    }
    
    return stack.length === 0
}
