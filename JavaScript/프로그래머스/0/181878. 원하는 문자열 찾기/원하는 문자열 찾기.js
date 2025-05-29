function solution(myString, pat) {
    const lowerPat = pat.toLowerCase()
    const lowerString = myString.toLowerCase()
    
    const result = lowerString.includes(lowerPat)
    return result ? 1 : 0
}