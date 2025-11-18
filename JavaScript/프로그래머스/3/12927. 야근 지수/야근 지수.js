class MaxHeap {
    heap = [0]

    append(value) {
        this.heap.push(value)

        let current = this.size() - 1
        let parent = (current / 2) >> 0

        while (current > 1 && this.isGreater(current, parent)) {
            this.swap(current, parent)
            current = parent
            parent = (current / 2) >> 0
        }
    }

    pop() {
        if (this.isEmpty()) return undefined

        const min = this.get(1)
        this.heap[1] = this.heap.pop()

        if (this.isEmpty()) return min

        let current = 1
        while (this.isValidIndex(current)) {
            const left = current * 2
            const right = current * 2 + 1
            let biggest = current

            if (this.isValidIndex(left) && this.isGreater(left, biggest)) biggest = left
            if (this.isValidIndex(right) && this.isGreater(right, biggest)) biggest = right
            if (biggest === current) break

            this.swap(current, biggest)
            current = biggest
        }

        return min
    }

    peek() {
        return this.get(1)
    }

    size() {
        return this.heap.length
    }

    swap(t1, t2) {
        [this.heap[t1], this.heap[t2]] = [this.heap[t2], this.heap[t1]]
    }

    isGreater(target1, target2) {
        return this.get(target1) > this.get(target2)
    }

    isEmpty() {
        return this.heap.length === 1
    }

    isValidIndex(index) {
        return 0 < index && index < this.heap.length
    }

    get(index) {
        return this.heap[index]
    }
}

function solution(n, works) {
  const maxHeap = new MaxHeap()

  works.forEach(w => maxHeap.append(w))

  while (n > 0) {
    let max = maxHeap.pop()
    if (max === 0) return 0
    maxHeap.append(max - 1)
    n--
  }

  return maxHeap.heap.reduce((acc, cur) => acc + cur * cur, 0)
}
