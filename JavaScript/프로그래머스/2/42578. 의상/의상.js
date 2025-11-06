function solution(clothes) {
    const map = new Map()
    
    for(let i = 0; i < clothes.length; i++) {
        const [name, type] = clothes[i]
        if(map.has(type)) map.set(type, map.get(type) + 1)
        else map.set(type, 1)
    }
    
    const mapArr = Array.from(map)
    return Array.from(map).reduce((acc, [_, value]) => acc *= value + 1, 1) - 1
}