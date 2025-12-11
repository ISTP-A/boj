function isPrime(value) {
  if (value < 2) return false
  const limit = Math.floor(Math.sqrt(value))
  
  for (let i = 2; i <= limit; i++) {
    if (value % i === 0) return false
  }
    
  return true
}

function solution(n, k) {
  const kn = n.toString(k)
  const parts = kn.split('0')

  let count = 0
  for (const part of parts) {
    if (!part) continue

    const num = Number(part)
    if (isPrime(num)) count++
  }
    
  return count
}
