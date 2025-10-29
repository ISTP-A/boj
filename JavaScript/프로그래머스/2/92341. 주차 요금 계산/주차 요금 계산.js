function toMinute(time) {
    const [h, m] = time.split(':').map(Number)
    return h * 60 + m
}

function calcCharge(fees, duration) {
    const [dtime, dfee, atime, afee] = fees
    let charge = dfee
    
    if(duration > dtime) {
        charge += Math.ceil((duration - dtime) / atime) * afee
    }
    
    return charge
}

function solution(fees, records) {
    const map = {}
    const durations = {}
    const last_time = toMinute("23:59")
    
    for(let i = 0; i < records.length; i++) {
        const [time, cnum, type] = records[i].split(' ')
        const timeMinute = toMinute(time)
        
        if(type === 'OUT') {
            durations[cnum] += timeMinute - map[cnum]
            delete map[cnum]
        }
        else {
            map[cnum] = timeMinute
            if(!durations[cnum]) durations[cnum] = 0
        }
    }
    
    Object.entries(map).forEach(
        ([cnum, duration]) => durations[cnum] += last_time - duration
    )
     
    return Object.entries(durations)
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([_, duration]) => calcCharge(fees, duration))
}