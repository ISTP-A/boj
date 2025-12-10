function solution(numbers) {
  const n = numbers.length
  const answer = new Array(n).fill(-1)

  const stack = []

  for (let i = 0; i < n; i++) {
    const current = numbers[i]
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < current) {
      const idx = stack.pop()
      answer[idx] = current
    }

    stack.push(i)
  }

  return answer
}
