function solution(n, t, m, p) {
    let answer = ''
    
    let str = ""
    let num = 0
    let head = 0
    while(answer.length < t) {
        if(str.length >= head + m) {
            answer += str[head + p - 1]
            head += m
        }
        else {
            str += num.toString(n).toUpperCase()
            num++
        }
    }
    
    return answer
}