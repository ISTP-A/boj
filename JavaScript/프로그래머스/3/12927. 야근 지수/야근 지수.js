class MaxHeap {
  constructor() {
    this.heap = []
  }

  push(value) {
    this.heap.push(value)
    this.bubbleUp()
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop()

    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown()
    return max
  }

  bubbleUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)

      if (this.heap[parentIndex] >= this.heap[index]) break

      [this.heap[parentIndex], this.heap[index]] =
        [this.heap[index], this.heap[parentIndex]]

      index = parentIndex
    }
  }

  bubbleDown() {
    let index = 0
    const length = this.heap.length

    while (true) {
      let left = index * 2 + 1
      let right = index * 2 + 2
      let largest = index

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right
      }

      if (largest === index) break

      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]

      index = largest
    }
  }
}

function solution(n, works) {
  const maxHeap = new MaxHeap()

  works.forEach(w => maxHeap.push(w))

  while (n > 0) {
    let max = maxHeap.pop()
    if (max === 0) return 0
    maxHeap.push(max - 1)
    n--
  }

  return maxHeap.heap.reduce((acc, cur) => acc + cur * cur, 0)
}
