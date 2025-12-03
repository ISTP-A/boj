const fs = require("fs")

const inputs = fs.readFileSync(0, "utf8").trim().split("\n")

inputs.shift()
const change_count = Number(inputs.pop())

const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const table = {}
for (const c of chars) table[c] = 0n

const pow36 = []
pow36[0] = 1n
for (let i = 1; i <= 60; i++) pow36[i] = pow36[i - 1] * 36n

const getValue = (ch) => {
  if ("0" <= ch && ch <= "9") return BigInt(ch.charCodeAt(0) - 48)
  return BigInt(ch.charCodeAt(0) - 55)
}

const to36 = (v) => v.toString(36).toUpperCase()

const toBigInt36 = (s) => {
  let res = 0n
  for (const ch of s) {
    res = res * 36n + getValue(ch)
  }
  return res
}

const getChangedValue = (ch, pos) => {
  const v = getValue(ch)
  return (35n - v) * pow36[pos]
}

let sum = 0n

for (const num of inputs) {
  sum += toBigInt36(num)

  const len = num.length
  for (let i = 0; i < len; i++) {
    const ch = num[i]
    const pos = len - i - 1
    table[ch] += getChangedValue(ch, pos)
  }
}

const gains = Object.values(table).sort((a, b) => (b > a ? 1 : -1))

for (let i = 0; i < change_count && i < gains.length; i++) {
  sum += gains[i]
}

console.log(to36(sum))
