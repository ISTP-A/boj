
function solution(s) {
    var answer = [0, 0]

    while (s !== "1") {
        let tmp = s.replaceAll('0', '')
        answer[0] += 1
        answer[1] += s.length - tmp.length
        s = tmp.length.toString(2)
    }

    return answer
}