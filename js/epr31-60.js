/**
 * Epr 31
 */

let initial_list = [.01 , .02, .05 , .1, .2]
    // , .5, 1, 2]
let permutations = [.01, .02, .05, .1, .2]
    // , .5, 1, 2]
let completed_permutations = []

let generateNewPaths = path => {
    initial_list.forEach(num => {
        if(path + num <= 0.2) {
            permutations.push(path + num)
        }
    })
}

while(permutations.length > 0) {
    let path = permutations.shift()
    if(path === 2) {
        completed_permutations.push(path)
        if(completed_permutations.length%1000000 === 0)
            console.log(completed_permutations)
    } else {
        generateNewPaths(path)
    }
}

console.log(completed_permutations.length)
