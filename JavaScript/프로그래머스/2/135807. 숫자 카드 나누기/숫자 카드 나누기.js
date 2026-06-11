function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a
}

function getGcd(arr) {
  return arr.reduce((acc, cur) => gcd(acc, cur))
}

function canNotDivideAny(num, arr) {
  return arr.every(v => v % num !== 0)
}

function solution(arrayA, arrayB) {
  const gcdA = getGcd(arrayA)
  const gcdB = getGcd(arrayB)

  let answer = 0

  if (canNotDivideAny(gcdA, arrayB)) {
    answer = Math.max(answer, gcdA)
  }

  if (canNotDivideAny(gcdB, arrayA)) {
    answer = Math.max(answer, gcdB)
  }

  return answer
}