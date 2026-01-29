function check_skill_tree(skill, skill_tree) {
    const skill_hash = new Set(skill.split(''))
    let pointer = 0
    for(let i = 0; i < skill_tree.length && pointer < skill.length; i++) {
        if(skill_hash.has(skill_tree[i])) {
            if(skill[pointer] !== skill_tree[i]) return false
            pointer++
        }
    }
    return true
}

function solution(skill, skill_trees) {
    let count = 0
    
    for(const skill_tree of skill_trees) {
        if(check_skill_tree(skill, skill_tree)) count++
    }
    
    return count
}