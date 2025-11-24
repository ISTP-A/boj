function solution(bridge_length, weight, truck_weights) {
    let second = 0
    let bridge = Array(bridge_length).fill(0)
    let currentWeight = 0
    let truck_idx = 0

    while (bridge.length > 0) {
        second++
        currentWeight -= bridge.shift()

        if (truck_idx < truck_weights.length) {
            const next = truck_weights[truck_idx]
            if (currentWeight + next <= weight) {
                bridge.push(next)
                currentWeight += next
                truck_idx++
            } else {
                bridge.push(0)
            }
        }
    }

    return second
}
