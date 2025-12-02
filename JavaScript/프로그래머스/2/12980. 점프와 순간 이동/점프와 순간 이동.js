function solution(n)
{
    let cnt = 0
    while(0 < n) {
        if(n % 2 === 0) n /= 2
        else {
            n -= 1
            cnt++
        }
    }
    return cnt 
}