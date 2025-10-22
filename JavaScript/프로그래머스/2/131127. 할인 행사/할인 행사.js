
function solution(want, number, discount) {
  const size = 10

  const need = Object.fromEntries(want.map((k, i) => [k, number[i]]))
  const counter = createCounter(want)
  const total = want.length

  let matched = 0
  let result = 0

  const adjust = (item, delta) => {
    if (!counter.has(item)) return

    const before = counter.data[item] === need[item]
    counter.add(item, delta)
    const after = counter.data[item] === need[item]

    if (!before && after) matched++
    else if (before && !after) matched--
  }

  for (let i = 0; i < size && i < discount.length; i++) {
    adjust(discount[i], +1)
  }

  if (matched === total) result++

  for (let i = size; i < discount.length; i++) {
    adjust(discount[i - size], -1)
    adjust(discount[i], +1)
    if (matched === total) result++
  }

  return result
}

function createCounter(targets, initial = 0) {
  const data = Object.fromEntries(targets.map(k => [k, initial]))
  const has = (k) => Object.prototype.hasOwnProperty.call(data, k)
  const add = (k, v = 1) => { if (has(k)) data[k] += v }
  const reset = () => { for (const k in data) data[k] = initial }
  return { data, has, add, reset }
}