function solution(k, tangerine) {
    const itemCountList = extractItemCountList(tangerine)
    const sorted = sortDescending(itemCountList)
    return extractUsedItemCount(sorted, k)
}

function extractItemCountList(item) {
    const map = new Map()
    for(let i = 0; i < item.length; i++) {
        const before = map.get(item[i]) || 0
        map.set(item[i], before + 1)
    }    
    return Array.from(map.values())
}

function extractUsedItemCount(items, count) {
    let sum = 0
    for(let i = 0; i < items.length; i++) {
        sum += items[i]
        if(sum >= count) return i+1
    }
    return items.length
}

function sortDescending(list) {
    return list.sort((a, b) => b - a)
}
