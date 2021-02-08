/**
 * Epr 67
 *
 */

// import {fopen} from './utilities.js'
//
// // jouer avec le poids total de l'arbre à gauche et à droite ?
// function getWeightOfBranch(split, cell) {
//     let row_width = 1
//     let weight = 0
//
//     for (let i = cell.y; i < split.length -1; i++) {
//         for (let j = 0; j < row_width; j++) {
//             // console.log(split[i][cell.x + j])
//             // console.log(i, cell.x + j, split[i][cell.x + j])
//             weight += split[i][cell.x + j]
//         }
//         row_width++
//     }
//
//     return weight
// }
//
// function processPaths(paths, split, size) {
//     let finishedPath = []
//
//     while (paths.length > 0) {
//         let path = paths.shift()
//
//         if (path.length < size && path[path.length - 1].y + 2 < split.length) {
//             let posY = path[path.length - 1].y
//             let posX = path[path.length - 1].x
//
//             let newPath1 = JSON.parse(JSON.stringify(path))
//             let newPath2 = JSON.parse(JSON.stringify(path))
//
//             let newCell1 = {cell: split[posY + 1][posX], y: posY + 1, x: posX}
//             let newCell2 = {cell: split[posY + 1][posX + 1], y: posY + 1, x: posX + 1}
//
//             newPath1.push(newCell1)
//             newPath2.push(newCell2)
//
//             paths.push(newPath1)
//             paths.push(newPath2)
//         } else {
//             finishedPath.push(path)
//         }
//     }
//     return finishedPath;
// }
//
// function pathByBestBranch(path, split) {
//     while (path.length < split.length - 1) {
//         let last_cell = path[path.length - 1]
//
//         let last_cell_left = JSON.parse(JSON.stringify(last_cell))
//         last_cell_left.y++
//         last_cell_left.cell = split[last_cell_left.y][last_cell_left.x]
//
//         let last_cell_right = JSON.parse(JSON.stringify(last_cell))
//         last_cell_right.y++
//         last_cell_right.x++
//         last_cell_left.cell = split[last_cell_right.y][last_cell_right.x]
//
//         let option_left = getWeightOfBranch(split, last_cell_left)
//         let option_right = getWeightOfBranch(split, last_cell_right)
//
//         if (option_left > option_right)
//             path.push(last_cell_left)
//         else if (option_left < option_right)
//             path.push(last_cell_right)
//         else
//             console.log('fk')
//
//         console.log(path)
//     }
//
//     console.log(path.reduce((a, b) => a + b.cell, 0))
// }
//
// fopen((triangle) => {
//     let split = triangle.split('\n').map(row => row.split(' ').map(cell => parseInt(cell)))
//
//     let paths = [
//         [
//             {cell: split[0][0], y: 0, x: 0}
//         ]
//     ]
//
//     let step = 15
//     let finishedPaths = []
//     let selectedTopPaths = 5
//     let loop = 0
//
//     // console.log(getWeightOfBranch(split, paths[0][0]))
//     // let path = [{cell: split[0][0], y: 0, x: 0}]
//     // pathByBestBranch(path, split);
//
//     do {
//         finishedPaths = processPaths(paths, split, step);
//         finishedPaths = finishedPaths.map(path => [path.reduce((accumulator, cell) => accumulator + cell.cell, 0), path[path.length - 1]])
//         finishedPaths = finishedPaths.sort((a, b) => b[0] - a[0])
//
//         let i = 0
//         while(paths.length < selectedTopPaths && i < finishedPaths.length) {
//             finishedPaths[i][1].cell = finishedPaths[i][0]
//
//
//             if(!paths.find(path => {
//                 return path[0].x === finishedPaths[i][1].x
//                 && path[0].y === finishedPaths[i][1].y
//             }))
//                 paths.push([finishedPaths[i][1]])
//             i++
//         }
//
//         loop++
//         console.log(finishedPaths)
//         // console.log(loop, finishedPaths, finishedPaths.length, paths.length,  Math.pow(2, step - 1),  Math.pow(2, step - 1) * paths.length)
//     } while(finishedPaths.length === Math.pow(2, step - 1)
//         || finishedPaths.length === Math.pow(2, step - 1) * paths.length)
//
//     console.log(finishedPaths)
// })
