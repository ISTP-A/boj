function checkValidParentheses(arr) {
    const stack = []
    for(const item of arr) {
        if(item === '(') {
            stack.push(item)
        }
        else {
            const at = stack.pop()
            if(at !== '(') {
                return false
            }
        }
    }
    
    return stack.length === 0
}

function solution(s){
    const arr = s.split('')
    const answer = checkValidParentheses(arr)
    return answer;
}