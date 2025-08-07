function solution(n, lost, reserve) {
    const arr = Array(n).fill(1)
    
    lost.forEach(stu => arr[stu-1]--)
    reserve.forEach(stu => arr[stu-1]++)
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 1) {
            if(i-1 >= 0 && arr[i - 1] === 0) {
                arr[i]--
                arr[i - 1]++
            }
            else if(i+1 < arr.length && arr[i + 1] === 0) {
                arr[i]--
                arr[i + 1]++
            }
        } 
    }
    
    return arr.filter(stu => stu > 0).length
}