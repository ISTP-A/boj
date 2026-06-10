function solution(order) {
    const sub_container = []
    
    let head = 0;
    let boxIndex = 1;
    
    while(head < order.length) {
        if(order[head] === boxIndex) {
            head++;
            boxIndex++
        }
        else if(sub_container.length > 0 && sub_container.at(-1) === order[head]) {
            sub_container.pop()
            head++;
        }
        else if(boxIndex <= order.length) {
            sub_container.push(boxIndex)
            boxIndex++
        }
        else {
            break
        }
    }
    return head
}
