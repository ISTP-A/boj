function makeMultiSet(str) {
  const s = str.toLowerCase()
  const map = new Map()

  for (let i = 0; i < s.length - 1; i++) {
    const a = s[i]
    const b = s[i + 1]

    if ("a" <= a && a <= "z" && "a" <= b && b <= "z") {
      const key = a + b
      map.set(key, (map.get(key) || 0) + 1)
    }
  }

  return map
}

function getIntersectionSize(m1, m2) {
  let size = 0

  for (const [key, count1] of m1.entries()) {
    if (m2.has(key)) {
      const count2 = m2.get(key)
      size += Math.min(count1, count2)
    }
  }

  return size
}

function getUnionSize(m1, m2) {
  let size = 0
  const keys = new Set([...m1.keys(), ...m2.keys()])

  for (const key of keys) {
    const c1 = m1.get(key) || 0
    const c2 = m2.get(key) || 0
    size += Math.max(c1, c2)
  }

  return size
}

function solution(str1, str2) {
  const m1 = makeMultiSet(str1)
  const m2 = makeMultiSet(str2)

  const inter = getIntersectionSize(m1, m2)
  const uni = getUnionSize(m1, m2)

  if (uni === 0) return 65536
    
  return Math.floor((inter / uni) * 65536)
}
