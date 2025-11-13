const isLeft = (value) => value === '('
const isRight = (value) => value === ')'
const isEmpty = (value) => value === ""

const reversal = (p) => p.split('').map(t => isLeft(t) ? ')' : '(').join('')

const isCorrect = (value) => {
    const stack = []
    for(let i = 0; i < value.length; i++) {
        if(isLeft(value[i])) stack.push('(')
        else if(!isLeft(stack.pop())) return false
    }
    return true
}

const isBalance = (value) => {
    if(value.length % 2 > 0) return false 
    
    const half = value.length / 2
    let left = 0
    
    for(let i = 0; i < value.length; i++) {
        if(isLeft(value[i])) left++
        if(left > half) return false
    }
    
    return left === half
}

const cutParentheses = (p) => {
    for(let i = 2; i < p.length; i += 2) {
        const u = p.slice(0, i)
        const v = p.slice(i)
    
        if(isBalance(u) && isBalance(v)) {
            return [u, v]
        }
    }
    return [p, ""]
}

const normalization = (w) => {
    if(isEmpty(w)) return ""
    
    const [u, v] = cutParentheses(w)
    if(isCorrect(u)) return u + normalization(v)
    
    let str = "(" + normalization(v) + ")"
    str += reversal(u.slice(1, u.length-1))
    return str
}

function solution(p) {
    if(isCorrect(p)) return p
    return normalization(p)
}

