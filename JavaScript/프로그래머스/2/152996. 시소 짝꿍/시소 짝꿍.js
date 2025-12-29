function solution(weights) {
  weights.sort((a, b) => a - b)

  const cnt = new Map()
  let answer = 0

  for (const w of weights) {
    const same = cnt.get(w) ?? 0

    answer += same

    if ((w * 2) % 3 === 0) {
      answer += cnt.get((w * 2) / 3) ?? 0
    }

    if (w % 2 === 0) {
      answer += cnt.get(w / 2) ?? 0
    }

    if ((w * 3) % 4 === 0) {
      answer += cnt.get((w * 3) / 4) ?? 0
    }

    cnt.set(w, same + 1)
  }

  return answer
}
