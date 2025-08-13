function getWord(str) {
    switch(str) {
        case "":
            return ""
        case " ":
            return " "
        default:
            return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
}

function solution(s) {
    const arr = s.split(" ")
    let answer = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        answer.push(getWord(str))
    }

    return answer.join(" ")
}
