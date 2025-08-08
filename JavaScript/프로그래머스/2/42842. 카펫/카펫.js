function getBrownPieces(w, h) {
    return 4 + w * 2 + h * 2
}
function solution(brown, yellow) {
    var answer = []
    for(let w = yellow; w >= 1; w--) {
        if(yellow % w > 0) continue
        
        const h = yellow / w
        
        if(brown === getBrownPieces(w, h)) {
           return [w+2, h+2]
        }
    }
    return -1
}