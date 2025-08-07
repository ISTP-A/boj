function solution(people, limit) {
    people.sort((a, b) => a - b)
    
    let count = 0
    let start = 0
    let end = people.length - 1
    
    while(start <= end) {
        if(limit < people[end] + people[start]) {
            count++
            end--
        }
        else {
            count++
            end--
            start++
        }
    }
    
    return count
}