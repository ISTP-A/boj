class Counter {
    map = undefined

    constructor(initial = []) {
        this.map = new Map()
        initial.forEach((num) => this.append(num))
    }

    append(number) {
        if (this.map.has(number)) this.map.set(number, this.map.get(number) + 1)
        else this.map.set(number, 1)

        return this
    }

    pop(number) {
        if (!this.map.has(number)) return null

        const value = this.map.get(number) - 1
        if (value > 0) this.map.set(number, value)
        else this.map.delete(number)

        return this
    }

    size() {
        return this.map.size
    }
}

function cut(arr, point) {
    return [arr.slice(0, point), arr.slice(point)]
}

function solution(topping) {
    var answer = 0

    const a = new Counter()
    const b = new Counter(topping)

    for (let i = 0; i < topping.length; i++) {
        a.append(topping[i])
        b.pop(topping[i])

        if (a.size() === b.size()) answer++
    }

    return answer
}