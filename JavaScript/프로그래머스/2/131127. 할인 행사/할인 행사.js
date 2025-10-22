function solution(want, number, discount) {
    const size = 10
    const need = new Map()
    
    for (let i = 0; i < want.length; i++) {
        need.set(want[i], number[i])
    }

    let remaining = number.reduce((a, b) => a + b, 0)
    const have = new Map()

    const add = (item, delta) => {
        if (!need.has(item)) return

        const beforeNeed = need.get(item)
        const curHave = (have.get(item) || 0) + delta
        have.set(item, curHave)

        if (delta === +1) {
            if (curHave <= beforeNeed) remaining--
        } else {
            if (curHave < beforeNeed) remaining++
        }
    }

    for (let i = 0; i < size; i++) add(discount[i], +1)
    let result = remaining === 0 ? 1 : 0

    for (let i = size; i < discount.length; i++) {
        add(discount[i - size], -1)
        add(discount[i], +1)
        if (remaining === 0) result++
    }

    return result
}