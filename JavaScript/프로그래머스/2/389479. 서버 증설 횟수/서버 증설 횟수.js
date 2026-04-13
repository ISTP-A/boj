class ServerPool {
    constructor(unitCapacity, lifetime) {
        this.unitCapacity = unitCapacity
        this.lifetime = lifetime

        this.expandedAt = []
        this.head = 0
    }

    removeExpiredServers(currentHour) {
        while (
            this.head < this.expandedAt.length &&
            this.expandedAt[this.head] + this.lifetime <= currentHour
        ) {
            this.head += 1
        }
    }

    getActiveExpandedServerCount() {
        return this.expandedAt.length - this.head
    }

    getCurrentCapacity() {
        return (1 + this.getActiveExpandedServerCount()) * this.unitCapacity
    }

    addServers(count, currentHour) {
        for (let i = 0; i < count; i += 1) {
            this.expandedAt.push(currentHour)
        }
    }

    getTotalExpandedCount() {
        return this.expandedAt.length
    }
}

function solution(players, m, k) {
    const serverPool = new ServerPool(m, k)

    for (let hour = 0; hour < players.length; hour += 1) {
        const currentPlayers = players[hour]

        serverPool.removeExpiredServers(hour)

        const currentCapacity = serverPool.getCurrentCapacity()

        if (currentPlayers >= currentCapacity) {
            const additionalServersNeeded = Math.ceil(
                (currentPlayers - currentCapacity + 1) / m
            )

            serverPool.addServers(additionalServersNeeded, hour)
        }
    }

    return serverPool.getTotalExpandedCount()
}