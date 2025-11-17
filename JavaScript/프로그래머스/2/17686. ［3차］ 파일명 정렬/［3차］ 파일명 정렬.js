const ASCII_ZERO = "0".codePointAt()
const ASCII_NINE = "9".codePointAt()

const isNumberString = (str = "") => ASCII_ZERO <= str.codePointAt() && ASCII_NINE >= str.codePointAt()

const parsing = (str = "") => {
    const parsed = ["", "", ""]
    let i = 0
    
    while(!isNumberString(str[i])) {
        parsed[0] += str[i]
        i++
    }
    
    let numCnt = 0
    while(isNumberString(str[i]) && numCnt < 5) {
        parsed[1] += str[i]
        i++
    }
    
    parsed[2] = str.slice(i)
    
    return parsed
}

function fileSort(file1, file2) {
    const [h1, n1, t1] = file1
    const [h2, n2, t2] = file2
    
    const head1 = h1.toLowerCase()
    const head2 = h2.toLowerCase()
    
    if(head1.toLowerCase() !== head2.toLowerCase()) {
        return head1.localeCompare(head2)
    }
    
    const num1 = Number(n1)
    const num2 = Number(n2)
    
    if(num1 !== num2) {
        return num1 - num2
    }
    
    return 0
}

function solution(files) {
    const parsed = files.map(parsing)
    const sorted = parsed.sort(fileSort)
    return parsed.map(item => item.join(''))
}