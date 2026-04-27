function shake(s1, s2) {
    return s1 + (s2 * 2)
}

function solution(scoville, K) {
    const heap = new MinHeap()
    scoville.map((s) => heap.push(s))
    
    let count = 0
    while(heap.peek()) {
        if(heap.peek() >= K) return count
        
        const s1 = heap.pop()
        const s2 = heap.pop()
        
        if(!s1 || !s2) break;
        
        heap.push(shake(s1, s2))
        count++
    }
    
    return -1
}

class MinHeap {
    ROOT_INDEX = 0
    heap = []
    
    bubbleUp() {
        let current = this.heap.length - 1
        while(current > this.ROOT_INDEX) {
            const parent = Math.floor((current - 1) / 2)
            if(this.heap[current] >= this.heap[parent]) break;
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
            current = parent
        }
    }
    
    bubbleDown() {
        let current = this.ROOT_INDEX
        
        while(current < this.heap.length) {
            let smallest = current
            const left = current * 2 + 1
            const right = current * 2 + 2
            
            if(left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }
            
            if(right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }
            
            if(current === smallest) break;
            
            [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]]
            current = smallest
        }
    }
    
    size() {
        return this.heap.length
    }
    
    peek() {
        return this.heap[this.ROOT_INDEX] ?? null
    }
    
    push(value) {
        this.heap.push(value)
        this.bubbleUp()
    }
    
    pop() {
        if(this.size() === 0) return null
        if(this.size() === 1) return this.heap.pop()
        
        const min = this.heap[this.ROOT_INDEX]
        this.heap[this.ROOT_INDEX] = this.heap.pop()
        this.bubbleDown()
        return min
    }
}