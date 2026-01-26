function solution(nums) {
    const max = nums.length / 2
    return Math.min(new Set(nums).size, max) 
}