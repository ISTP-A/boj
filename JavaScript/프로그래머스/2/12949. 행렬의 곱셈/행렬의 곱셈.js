function solution(arr1, arr2) {
    const len = arr1.length
    const answer = Array.from({ length: arr1.length }, () => Array(arr2[0].length).fill(0))

    for(let i = 0; i < answer.length; i++) {
        for(let j = 0; j < arr2[0].length; j++) {
            for(let k = 0; k < arr2.length; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    
    answer.map(c => console.log(c))
    return answer
}

// 1,4  3,3
// 3,2  3,3
// 4,1

// 2, 3, 2   5, 4, 3   22, 22, 11
// 4, 2, 4   2, 4, 1   36, 28, 18
// 4, 1, 4   3, 1, 1   29, 20, 14