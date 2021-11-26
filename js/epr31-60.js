/**
 * Epr 31
 */

// let coins = [1, 2, 5 , 10, 20, 50, 100, 200]
// let coins = [1, 2]
// let coins = [1]
//  let coins = [200]
// let combinations = [{last_coin: 0, sum: 0}]
// let combinations = [[]]
// let completed_combinations = []

// 1 -> 1
// 2 -> 2
// 3 -> 2
// 4 -> 3
// 5 -> 4
// 6 -> 5
// 7 -> 7
// 10 -> 14

// 20 -> 165
// 21 -> 214

// 49 -> 203437
// 50 -> 260009
// 51 -> 332118

// while(combinations.length > 0) {
//     let combination = combinations.shift()
//     combinations.push(generateNewPaths(combination))
// }
//
// console.log(completed_combinations)

// FAST NAIVE WAY - incomplete, doesn't work
// function generateNewPaths(combination) {
//     let new_combinations = [];
//
//     for (let i = 0; i < coins.length; i++) {
//         if (combination.sum === 200){
//             completed_combinations.push(combination)
//         } else if(combination.sum + coins[i] > 200) {
//             break
//         } else if(combination.sum < 200 && coins[i] >= combination.last_coin) {
//             new_combinations.push(branchOutCombination(combination, coins[i]))
//         }
//     }
//
//     console.log(new_combinations)
//     return new_combinations
// }
//
// function branchOutCombination(combination, coin) {
//     return {last_coin: coin, sum: combination.sum + coin}
// }

// SLOW NAIVE WAY - should be working given enough time
// function generateNewPaths(combination) {
//     for (let i = 0; i < coins.length; i++) {
//         let combination_sum = combination.reduce((acc, coin) => coin + acc, 0)
//         if(combination_sum <= 200 && (coins[i] >= combination[0] || combination_sum === 0)) {
//             combinations.push(createUncompleteCombination(combination, coins[i]))
//         } else if (combination_sum === 200){
//             completed_combinations.push(combination)
//         }
//     }
//
//     if(!combinations.length % 1000)
//         console.log(combinations.length + ' remaining')
// }
//
// function createUncompleteCombination(combination, value) {
//     let newCombination = combination.slice()
//     newCombination.unshift(value)
//     return newCombination
// }

// SMART WAY
// let combinations = new Map()
// let price_target = 200
// let coins = [1, 2, 5, 10, 20, 50, 100, 200]
//
// for (let target = 1; target <= price_target; target++) {
//     if(combinations.get(coins[0]) === undefined) {
//         combinations.set(coins[0], new Map())
//     }
//     combinations.get(coins[0]).set(target, 1)
// }
//
// for (let coin_index = 1; coin_index < coins.length; coin_index++) {
//     for (let target = 1; target <= price_target; target++) {
//         if(combinations.get(coins[coin_index]) === undefined) {
//             combinations.set(coins[coin_index], new Map())
//         }
//
//         if(coins[coin_index] > target) {
//             combinations.get(coins[coin_index]).set(target, combinations.get(coins[coin_index - 1]).get(target))
//         } else {
//             let target_combinations_of_lower_coin = combinations.get(coins[coin_index - 1]).get(target)
//             let target_combinations_of_lower_target = target - coins[coin_index] <= 0 ? 1 : combinations.get(coins[coin_index]).get(target - coins[coin_index])
//
//             combinations.get(coins[coin_index]).set(target, target_combinations_of_lower_coin + target_combinations_of_lower_target)
//         }
//     }
// }
// console.log(combinations)


