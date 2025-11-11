class Counter {
    map = new Map()
    size = 0
    
    constructor(initial = []) {
        initial.forEach((num) => this.append(num))
        this.size = this.map.size
    }

    append(number) {
        if(this.map.has(number)) {
            this.map.set(number, this.map.get(number) + 1)
        }
        else {
            this.map.set(number, 1)
            this.size++
        }
    }

    pop(number) {
        const value = this.map.get(number) - 1
        if (value > 0) {
            this.map.set(number, value)
        }
        else {
            this.map.delete(number)
            this.size--
        }
        
        return number
    }
    
    getSize() {
        return this.size
    }
}

function cut(arr, point) {
    return [arr.slice(0, point), arr.slice(point)]
}

function solution(topping) {
    var answer = 0

    const a = new Counter()
    const b = new Counter(topping)

    for (let i = 0; i < topping.length - 1; i++) {
        a.append(b.pop(topping[i]))
        if (a.getSize() === b.getSize()) answer++
    }

    return answer
}