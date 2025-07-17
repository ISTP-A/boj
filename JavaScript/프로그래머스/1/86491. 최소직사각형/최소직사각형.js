function sortSizes(sizes) {
    return sizes.map(([a, b]) => a - b > 0 ? [b, a] : [a, b])
}

function findSocketSize(items) {
    let width = 0
    let height = 0
    
    for(let i = 0; i < items.length; i++) {
        const [w, h] = items[i]
        if(width < w) width = w
        if(height < h) height = h
    }
    
    return width * height
}

function solution(sizes) {
    const items = sortSizes(sizes)
    return findSocketSize(items)
}