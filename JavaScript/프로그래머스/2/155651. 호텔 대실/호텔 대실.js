function timeToNumber(timeString) {
    const [hour, minute] = timeString.split(":").map(Number)
    return hour * 60 + minute
}

function findEmptyRoom(rooms, time) {
    const COOLTIME = 10
    return rooms.findIndex(room => room + COOLTIME <= time)
}

function solution(book_time) {
    var answer = 0;
    const rooms = []
    const time_arr = book_time
        .map(([start, end]) => [timeToNumber(start), timeToNumber(end)])
        .sort((a, b) => a[0] - b[0])
    
    rooms.push(time_arr[0][1])
    for(let i = 1; i < time_arr.length; i++) {
        const [start, end] = time_arr[i]
        const idx = findEmptyRoom(rooms, start)
        if(idx === -1) rooms.push(end)
        else rooms[idx] = end
    }
    
    return rooms.length;
}