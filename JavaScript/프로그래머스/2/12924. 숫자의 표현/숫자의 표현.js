function solution(n) {
  let count = 0
  for (let i = 1; i <= n; i += 2) {
    if (n % i === 0) count++
  }
  return count;
}