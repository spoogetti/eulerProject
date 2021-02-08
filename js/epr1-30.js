/**
 * Epr01
 *
 */

// let results = []
//
// for (let i = 0; i < 1000; i++) {
//     if(i%3 === 0 || i%5 === 0)
//         results.push(i)
// }

// alert(results.reduce((a, b) => a + b, 0))

/**
 * Epr02
 *
 */
// let evenFibsTotal = 0
// let fibsLastTwo = [1, 1]
//
// while (fibsLastTwo[1] < 4000000) {
//     if(fibsLastTwo[1]%2 === 0)
//         evenFibsTotal += fibsLastTwo[1]
//
//     let nextFib = fibsLastTwo[0] + fibsLastTwo[1]
//     fibsLastTwo[0] = fibsLastTwo[1]
//     fibsLastTwo[1] = nextFib
// }
//
// alert(evenFibsTotal)

/**
 * Epr03
 *
 */
// let largestPrime = 2
// // let init = 13195
// let init = 600851475143
//
// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false;
//     return num > 1;
// }
//
// while (init > 1) {
//     if(largestPrime > init)
//         break
//
//     if(init%largestPrime === 0)
//         init /= largestPrime
//     else
//         do {
//           largestPrime++
//         } while(!isPrime(largestPrime))
// }
//
// alert(largestPrime)

/**
 * Epr04
 *
 */

// let op1 = 999
// let op2 = 999
// let largestPal = 0
//
// const isPalindrome = num => {
//     return [...num.toString()].reverse().join("") === num.toString()
// }
//
// for (let i = op2; i > 99; i--) {
//     // console.log(op2)
//     for (let j = op1; j > 99; j--) {
//         // console.log(op1)
//         if(isPalindrome(i * j))
//             if(largestPal < i*j)
//                 largestPal = i*j
//     }
// }
//
// alert(largestPal)

/**
 * Epr05
 *
 */

// let evenlyDivisible = num => {
//     for (let i = 20; i > 0; i-=1) {
//         if((num%i) !== 0)
//             return false
//     }
//     return true
// }
//
// let init = 21
//
// while(!evenlyDivisible(init)) {
//     init ++
// }
//
// alert(init)

/**
 * Epr06
 *
 */

// let sumSquare = 0
// let squareSum = 0
//
// for (let i = 0; i <= 100; i++) {
//     sumSquare += Math.pow(i, 2)
// }
//
// for (let i = 0; i <= 100; i++) {
//     squareSum += i
// }
// squareSum = Math.pow(squareSum, 2)
//
// alert(squareSum - sumSquare)

/**
 * Epr07
 *
 */

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false;
//     return num > 1;
// }
//
// let primesList = []
// let init = 1
//
// while(primesList.length < 10003) {
//     void(isPrime(init) && primesList.push(init))
//     init++
// }
//
// console.log(primesList)
//
// alert(primesList[10000])

/**
 * Epr08
 *
 */

// let bigNumber =
//     '73167176531330624919225119674426574742355349194934' +
//     '96983520312774506326239578318016984801869478851843' +
//     '85861560789112949495459501737958331952853208805511' +
//     '12540698747158523863050715693290963295227443043557' +
//     '66896648950445244523161731856403098711121722383113' +
//     '62229893423380308135336276614282806444486645238749' +
//     '30358907296290491560440772390713810515859307960866' +
//     '70172427121883998797908792274921901699720888093776' +
//     '65727333001053367881220235421809751254540594752243' +
//     '52584907711670556013604839586446706324415722155397' +
//     '53697817977846174064955149290862569321978468622482' +
//     '83972241375657056057490261407972968652414535100474' +
//     '82166370484403199890008895243450658541227588666881' +
//     '16427171479924442928230863465674813919123162824586' +
//     '17866458359124566529476545682848912883142607690042' +
//     '24219022671055626321111109370544217506941658960408' +
//     '07198403850962455444362981230987879927244284909188' +
//     '84580156166097919133875499200524063689912560717606' +
//     '05886116467109405077541002256983155200055935729725' +
//     '71636269561882670428252483600823257530420752963450'
//
// let maxProduct = 0
// bigNumber = bigNumber.split('').map(number => parseInt(number))
//
// let sumThirteen = (array, index) => {
//     let sum = 1
//     for (let i = 0; i < 13; i++) {
//         sum *= array[index + i]
//     }
//     return sum
// }
//
// for (let i = 0; i < bigNumber.length - 13; i++) {
//     let sum = sumThirteen(bigNumber, i)
//     console.log(sum)
//     if(sum > maxProduct)
//         maxProduct = sum
// }
//
// alert(maxProduct)


/**
 * Epr09
 *
 */

// a = m² - n²
// b = 2mn
// c = n² + m²

// m > n

// let isPythagoreanTriple = (a, b, c) => {
//     return a ** 2 + b ** 2 === c ** 2
// }

// for (let n = 0; n < 1000; n++) {
//     for (let m = n+1; m < 1000; m++) {
//         let a  = 2 * m * n
//         let b = m ** 2
//         let c = n ** 2 + m ** 2
//         if(a + b + c === 1000)
//             alert([a, b, c, a * b * c, a ** 2 + b ** 2, c ** 2])
//     }
// }

// for (let a = 0; a < 1000; a++) {
//     for (let b = 0; b < 1000; b++) {
//         for (let c = 0; c < 1000; c++) {
//             if(a + b + c === 1000 && isPythagoreanTriple(a, b, c))
//                 alert(a * b * c)
//         }
//     }
// }

/**
 * Epr10
 *
 */

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false;
//     return num > 1;
// }
//
// let i = 2
// let total = 0
//
// while(i< 2000000) {
//     if(isPrime(i)) {
//         total += i
//     }
//      i++
// }
//
// alert(total)

/**
 * Epr11
 *
 */

// let grid = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08\n" +
//     "49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00\n" +
//     "81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65\n" +
//     "52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91\n" +
//     "22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80\n" +
//     "24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50\n" +
//     "32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70\n" +
//     "67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21\n" +
//     "24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72\n" +
//     "21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95\n" +
//     "78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92\n" +
//     "16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57\n" +
//     "86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58\n" +
//     "19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40\n" +
//     "04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66\n" +
//     "88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69\n" +
//     "04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36\n" +
//     "20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16\n" +
//     "20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54\n" +
//     "01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48"
//
// let splitGrid = grid
//     .split('\n')
//     .map(row =>
//         row.split(' ')
//             .map(value => parseInt(value)))
//
// let max  = 0
//
// // console.log(splitGrid.length, splitGrid[0].length)
// // splitGrid.forEach(row => row.forEach(col => console.log(col)))
//
// for (let row = 0; row < splitGrid.length; row++) {
//     for (let col = 0; col < splitGrid[0].length; col++) {
//
//         if(col + 3 < splitGrid[0].length) {
//             let rowFactor = splitGrid[row][col] * splitGrid[row][col + 1] * splitGrid[row][col + 2] * splitGrid[row][col + 3]
//             if(rowFactor > max) {
//                 max = rowFactor
//             }
//         }
//
//         if(row + 3 < splitGrid.length) {
//             let colFactor = splitGrid[row][col] * splitGrid[row + 1][col] * splitGrid[row + 2][col] * splitGrid[row + 3][col]
//             if(colFactor > max)
//                 max = colFactor
//         }
//
//         if(col + 3 < splitGrid[0].length && row + 3 < splitGrid.length) {
//             let diagFactor = splitGrid[row][col] * splitGrid[row + 1][col + 1] * splitGrid[row + 2][col + 2] * splitGrid[row + 3][col + 3]
//             if(diagFactor > max)
//                 max = diagFactor
//         }
//
//         if(col - 3 >= 0 && row + 3 < splitGrid.length) {
//             let diagFactor = splitGrid[row][col] * splitGrid[row + 1][col - 1] * splitGrid[row + 2][col - 2] * splitGrid[row + 3][col - 3]
//             if(diagFactor > max)
//                 max = diagFactor
//         }
//     }
// }
//
// alert([max])

/**
 * Epr12
 *
 */

// let nbDivisors = 0
// let init = 1
// let triangularNum = 0
//
// let getDivisors = num => {
//     let divisors = []
//     for (let i = 0; i < Math.sqrt(num); i++) {
//         if(num%i === 0) {
//             if(num/i === i)
//                 divisors.push(i)
//             else {
//                 divisors.push(i, num/i)
//             }
//
//         }
//     }
//     // console.log(num, divisors)
//     return divisors
// }
//
// while (nbDivisors < 500) {
//     triangularNum += init
//     init++
//     nbDivisors = getDivisors(triangularNum).length
// }
//
// alert(triangularNum)

/**
 * Epr13
 *
 */

// let bigNumbers = "37107287533902102798797998220837590246510135740250\n" +
//     "46376937677490009712648124896970078050417018260538\n" +
//     "74324986199524741059474233309513058123726617309629\n" +
//     "91942213363574161572522430563301811072406154908250\n" +
//     "23067588207539346171171980310421047513778063246676\n" +
//     "89261670696623633820136378418383684178734361726757\n" +
//     "28112879812849979408065481931592621691275889832738\n" +
//     "44274228917432520321923589422876796487670272189318\n" +
//     "47451445736001306439091167216856844588711603153276\n" +
//     "70386486105843025439939619828917593665686757934951\n" +
//     "62176457141856560629502157223196586755079324193331\n" +
//     "64906352462741904929101432445813822663347944758178\n" +
//     "92575867718337217661963751590579239728245598838407\n" +
//     "58203565325359399008402633568948830189458628227828\n" +
//     "80181199384826282014278194139940567587151170094390\n" +
//     "35398664372827112653829987240784473053190104293586\n" +
//     "86515506006295864861532075273371959191420517255829\n" +
//     "71693888707715466499115593487603532921714970056938\n" +
//     "54370070576826684624621495650076471787294438377604\n" +
//     "53282654108756828443191190634694037855217779295145\n" +
//     "36123272525000296071075082563815656710885258350721\n" +
//     "45876576172410976447339110607218265236877223636045\n" +
//     "17423706905851860660448207621209813287860733969412\n" +
//     "81142660418086830619328460811191061556940512689692\n" +
//     "51934325451728388641918047049293215058642563049483\n" +
//     "62467221648435076201727918039944693004732956340691\n" +
//     "15732444386908125794514089057706229429197107928209\n" +
//     "55037687525678773091862540744969844508330393682126\n" +
//     "18336384825330154686196124348767681297534375946515\n" +
//     "80386287592878490201521685554828717201219257766954\n" +
//     "78182833757993103614740356856449095527097864797581\n" +
//     "16726320100436897842553539920931837441497806860984\n" +
//     "48403098129077791799088218795327364475675590848030\n" +
//     "87086987551392711854517078544161852424320693150332\n" +
//     "59959406895756536782107074926966537676326235447210\n" +
//     "69793950679652694742597709739166693763042633987085\n" +
//     "41052684708299085211399427365734116182760315001271\n" +
//     "65378607361501080857009149939512557028198746004375\n" +
//     "35829035317434717326932123578154982629742552737307\n" +
//     "94953759765105305946966067683156574377167401875275\n" +
//     "88902802571733229619176668713819931811048770190271\n" +
//     "25267680276078003013678680992525463401061632866526\n" +
//     "36270218540497705585629946580636237993140746255962\n" +
//     "24074486908231174977792365466257246923322810917141\n" +
//     "91430288197103288597806669760892938638285025333403\n" +
//     "34413065578016127815921815005561868836468420090470\n" +
//     "23053081172816430487623791969842487255036638784583\n" +
//     "11487696932154902810424020138335124462181441773470\n" +
//     "63783299490636259666498587618221225225512486764533\n" +
//     "67720186971698544312419572409913959008952310058822\n" +
//     "95548255300263520781532296796249481641953868218774\n" +
//     "76085327132285723110424803456124867697064507995236\n" +
//     "37774242535411291684276865538926205024910326572967\n" +
//     "23701913275725675285653248258265463092207058596522\n" +
//     "29798860272258331913126375147341994889534765745501\n" +
//     "18495701454879288984856827726077713721403798879715\n" +
//     "38298203783031473527721580348144513491373226651381\n" +
//     "34829543829199918180278916522431027392251122869539\n" +
//     "40957953066405232632538044100059654939159879593635\n" +
//     "29746152185502371307642255121183693803580388584903\n" +
//     "41698116222072977186158236678424689157993532961922\n" +
//     "62467957194401269043877107275048102390895523597457\n" +
//     "23189706772547915061505504953922979530901129967519\n" +
//     "86188088225875314529584099251203829009407770775672\n" +
//     "11306739708304724483816533873502340845647058077308\n" +
//     "82959174767140363198008187129011875491310547126581\n" +
//     "97623331044818386269515456334926366572897563400500\n" +
//     "42846280183517070527831839425882145521227251250327\n" +
//     "55121603546981200581762165212827652751691296897789\n" +
//     "32238195734329339946437501907836945765883352399886\n" +
//     "75506164965184775180738168837861091527357929701337\n" +
//     "62177842752192623401942399639168044983993173312731\n" +
//     "32924185707147349566916674687634660915035914677504\n" +
//     "99518671430235219628894890102423325116913619626622\n" +
//     "73267460800591547471830798392868535206946944540724\n" +
//     "76841822524674417161514036427982273348055556214818\n" +
//     "97142617910342598647204516893989422179826088076852\n" +
//     "87783646182799346313767754307809363333018982642090\n" +
//     "10848802521674670883215120185883543223812876952786\n" +
//     "71329612474782464538636993009049310363619763878039\n" +
//     "62184073572399794223406235393808339651327408011116\n" +
//     "66627891981488087797941876876144230030984490851411\n" +
//     "60661826293682836764744779239180335110989069790714\n" +
//     "85786944089552990653640447425576083659976645795096\n" +
//     "66024396409905389607120198219976047599490197230297\n" +
//     "64913982680032973156037120041377903785566085089252\n" +
//     "16730939319872750275468906903707539413042652315011\n" +
//     "94809377245048795150954100921645863754710598436791\n" +
//     "78639167021187492431995700641917969777599028300699\n" +
//     "15368713711936614952811305876380278410754449733078\n" +
//     "40789923115535562561142322423255033685442488917353\n" +
//     "44889911501440648020369068063960672322193204149535\n" +
//     "41503128880339536053299340368006977710650566631954\n" +
//     "81234880673210146739058568557934581403627822703280\n" +
//     "82616570773948327592232845941706525094512325230608\n" +
//     "22918802058777319719839450180888072429661980811197\n" +
//     "77158542502016545090413245809786882778948721859617\n" +
//     "72107838435069186155435662884062257473692284509516\n" +
//     "20849603980134001723930671666823555245252804609722\n" +
//     "53503534226472524250874054075591789781264330331690"
//
// let splittedBigNumbers = bigNumbers.split("\n").map(bigNum => BigInt(bigNum))
//
// alert(splittedBigNumbers.reduce((a, b) => a + b, 0n).toString().slice(0,10))

/**
 * Epr14
 *
 */

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// let maxLength = 0
//
// let runCollatz = num => {
//     let collatzValues = []
//
//     do {
//         collatzValues.push(num)
//         num = num%2 === 0 ?  num / 2 : num * 3 + 1
//     } while (num !== 1)
//
//     if(collatzValues.length === 524)
//         console.log(collatzValues)
//     return collatzValues
// }
//
// for (let i = 1000000; i > 0; i--) {
//     maxLength = Math.max(runCollatz(i).length, maxLength)
// }
//
// alert(maxLength)

/**
 * Epr15
 *
 */

// --------------------||||||||||||||||||||
// -------------------|-|||||||||||||||||||
// on répartis 20 batonets dans 40 cases
// j'ai un sac de 40 billes dont 20 billes blanches
// n! / (n - p)!
// 40! / 20!

// let nbPaths = 0
//
// let pos = [0, 0]
//
// let addPaths = (pos, grid_size) => {
//     // console.log(pos)
//
//     if(pos[0] < grid_size && pos[1] < grid_size) {
//         addPaths([pos[0] + 1, pos[1]]    , grid_size)
//         addPaths([pos[0]    , pos[1] + 1], grid_size)
//     }
//     else {
//         nbPaths++
//     }
//
// }
//
// addPaths(pos, 20)

// alert(nbPaths)

// En fait on se rend compte en calculant les premiers termes que ça correspond aux coefficients binomiaux centraux (._.)
// let factorial = num =>{
//     if(num === 0 || num === 1){
//         return 1;
//     }else{
//         return num * factorial(num-1);
//     }
// }
//
// alert(factorial(2*20)/Math.pow(factorial(20), 2))

/**
 * Epr16
 *
 */

// console.log(BigInt(Math.pow(2, 1000)).toString().split('').map(num => parseInt(num)).reduce((a, b) => a + b, 0))

/**
 * Epr17
 *
 */

// let eng_numerals = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twentyone', 'twentytwo', 'twentythree', 'twentyfour', 'twentyfive', 'twentysix', 'twentyseven', 'twentyeight', 'twentynine', 'thirty', 'thirtyone', 'thirtytwo', 'thirtythree', 'thirtyfour', 'thirtyfive', 'thirtysix', 'thirtyseven', 'thirtyeight', 'thirtynine', 'forty', 'fortyone', 'fortytwo', 'fortythree', 'fortyfour', 'fortyfive', 'fortysix', 'fortyseven', 'fortyeight', 'fortynine', 'fifty', 'fiftyone', 'fiftytwo', 'fiftythree', 'fiftyfour', 'fiftyfive', 'fiftysix', 'fiftyseven', 'fiftyeight', 'fiftynine', 'sixty', 'sixtyone', 'sixtytwo', 'sixtythree', 'sixtyfour', 'sixtyfive', 'sixtysix', 'sixtyseven', 'sixtyeight', 'sixtynine', 'seventy', 'seventyone', 'seventytwo', 'seventythree', 'seventyfour', 'seventyfive', 'seventysix', 'seventyseven', 'seventyeight', 'seventynine', 'eighty', 'eightyone', 'eightytwo', 'eightythree', 'eightyfour', 'eightyfive', 'eightysix', 'eightyseven', 'eightyeight', 'eightynine', 'ninety', 'ninetyone', 'ninetytwo', 'ninetythree', 'ninetyfour', 'ninetyfive', 'ninetysix', 'ninetyseven', 'ninetyeight', 'ninetynine']
//
// let eng_numerals_length = eng_numerals.reduce((acc, current) => acc + current.length, 0)
// let length = 0
//
// for (let i = 0; i < 10; i++) {
//     if(i === 0)
//         length += eng_numerals_length
//     else
//         length += eng_numerals_length + `${eng_numerals[i-1]}hundred`.length * 100 + `and`.length * 99
// }
//
// let one_thousand = 11
// length += one_thousand
//
// alert(length)

/**
 * Epr18
 *
 */

// let triangle = `75
// 95 64
// 17 47 82
// 18 35 87 10
// 20 04 82 47 65
// 19 01 23 75 03 34
// 88 02 77 73 07 63 67
// 99 65 04 28 06 16 70 92
// 41 41 26 56 83 40 80 70 33
// 41 48 72 33 47 32 37 16 94 29
// 53 71 44 65 25 43 91 52 97 51 14
// 70 11 33 28 77 73 17 78 39 68 17 57
// 91 71 52 38 17 14 91 43 58 50 27 29 48
// 63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`
//
// let splitted = triangle.split('\n').map(row => row.split(' ').map(cell => parseInt(cell)))
//
// let paths = [
//     [
//         {cell: splitted[0][0], y: 0, x: 0}
//     ]
// ]
//
// let finishedPath = []
//
// while(paths.length > 0) {
//     let path = paths.shift()
//
//     if(path.length < splitted.length) {
//         let posY = path[path.length - 1].y
//         let posX = path[path.length - 1].x
//
//         let newPath1 = JSON.parse(JSON.stringify(path))
//         let newPath2 = JSON.parse(JSON.stringify(path))
//
//         let newCell1 = {cell : splitted[posY + 1][posX],     y : posY + 1, x : posX}
//         let newCell2 = {cell : splitted[posY + 1][posX + 1], y : posY + 1, x : posX + 1}
//
//         newPath1.push(newCell1)
//         newPath2.push(newCell2)
//
//         paths.push(newPath1)
//         paths.push(newPath2)
//     } else {
//         finishedPath.push(path)
//     }
// }
//
// console.log(finishedPath)
// finishedPath = finishedPath.map(path => path.reduce((accumulator, cell) => accumulator + cell.cell, 0))
// console.log(finishedPath)
// console.log(Math.max(...finishedPath))

/**
 * Epr 19
 *
 */

// let init = new Date(1901, 0, 1)
// let sundays = 0
//
// while(init.getFullYear() !== 2001) {
//     init.setMonth(init.getMonth() + 1)
//     if(init.getUTCDay() === 6)
//         sundays++
// }
//
// console.log(sundays)

/**
 * Epr 20
 *
 */

// 100!
// let factorial100 = BigInt(1)
//
// for (let i = BigInt(1); i <101; i++) {
//     factorial100 *= i
// }
//
// console.log(
//     factorial100.toString()
//     .split('')
//     .map(num => parseInt(num))
//     .reduce((a, b) => a + b, 0))

/**
 * Epr 21
 *
 */

// f(a) = b
// f(b) = a

// A l'index a j'ai tous les f(a) <=> (b)
// A l'index b j'ai tous les f(b) <=> (a)

// let sumAmicable = 0
//
// let properDivs = num => {
//     let sumDivs = 0
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0)
//             sumDivs += i
//     }
//     return sumDivs
// }
//
// for (let i = 1; i < 10001; i++) {
//     if(properDivs(properDivs(i)) === i && properDivs(i) !== i) {
//         sumAmicable += i
//     }
// }
//
// console.log(sumAmicable)

/**
 * Epr 22
 *
 */

// import {fopen} from './utilities.js'
//
// fopen((names) => {
//     let split_names = names.replace(/["]/g, "").split(',')
//     split_names = split_names.sort()
//     split_names = split_names
//         .map(name => name.split('')
//             .map(letter => letter.charCodeAt(0) - 64)
//             .reduce((a, b) => a + b, 0))
//     split_names = split_names.map((name, index) => name * (index + 1))
//     split_names = split_names.reduce((a, b) => a + b, 0)
//     console.log(split_names)
// })

/**
 * Epr 23
 *
 */

// let isAbundant = num => {
//     let divs = 0
//     for (let i = 0; i < num; i++) {
//         if(num%i === 0)
//             divs += i
//     }
//     return divs > num
// }
//
// let isSumOfTwo = (num, arr) => {
//     let tests = arr.filter(abundant => abundant < num)
//
//     for (let i = 0; i < tests.length; i++) {
//         for (let j = 0; j < tests.length; j++) {
//             if(num - tests[i] - tests[j] === 0) {
//                 return true
//             }
//         }
//     }
//
//     return false
// }
//
// let abundants = []
// let sumOfNonAbundants = 0
//
// for (let i = 1; i < 28123; i++) {
//     if(isAbundant(i))
//         abundants.push(i)
// }
//
// for (let i = 0; i < 28124; i++) {
//     if(!isSumOfTwo(i, abundants)) {
//         sumOfNonAbundants += i
//         console.log(i)
//     }
// }
//
// console.log(sumOfNonAbundants)

/**
 * Epr 24
 *
 */

// let initial_list = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9]
// let permutations = [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9]]
// let completed_permutations = []
//
// let generateNewPaths = path => {
//     initial_list.forEach(num => {
//         if(!path.includes(num)) {
//             let new_path = [...path]
//             new_path.push(num)
//             permutations.push(new_path)
//         }
//     })
// }
//
// while(permutations.length > 0) {
//     // permutations.sort((a, b) => a.join('').localeCompare(b.join('')))
//     let path = permutations.shift()
//     if(path.length === initial_list.length) {
//         completed_permutations.push(path)
//     } else {
//         generateNewPaths(path)
//     }
// }
//
// console.log(completed_permutations.map(path => path.join('')).sort())

/**
 * Epr 25
 *
 */

// let num1 = BigInt(1)
// let num2 = BigInt(1)
// let i = 1
//
// while(num1.toString().length < 1000) {
//     let num3 = num1 + num2
//     num1 = num2
//     num2 = num3
//     i++
// }
//
// console.log(i)

/**
 * Epr 26
 *
 */

// import {Decimal} from '../libraries/decimals.js'
// Decimal.set({ precision: 3000, rounding: 4 })
// let init = new Decimal(1)
//
// let findOccOfStrInStr = (needle, haystack) => {
//     let regExp = new RegExp(needle, "gi");
//     return (haystack.match(regExp) || []).length;
// }
//
// let getLongestRepeatingSeq = str => {
//     for (let i = 0; i < 1; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             let filter_predicate = cell => cell.length !== 0
//                 // && cell.length < str.substring(i, j).length
//
//             let splits = str.split(str.substring(i, j))
//             let splits_lengths_over_zero = splits.filter(filter_predicate)
//             // let substring_present_more_than_once = findOccOfStrInStr(str.substring(i, j), str) > 1
//
//             if(splits_lengths_over_zero.length === 1
//                 // && substring_present_more_than_once
//             ) {
//                 return str.substring(i, j)
//             }
//         }
//     }
//     return 0
// }
//
// let fractions = []
//
// for (let i = 1; i < 1000; i++) {
//     fractions.push(init.div(i).toString().substring(i.toString().length + 1))
// }
//
// let fractions_with_longest_seq = fractions.map((fraction, index) => {
//     let longest_seq = getLongestRepeatingSeq(fraction)
//     // console.log(index)
//     return [index + 1, longest_seq?.length, fraction,  longest_seq]
// })
//
// fractions_with_longest_seq = fractions_with_longest_seq.filter(seq => seq[0] !== seq[1] - 1 && seq[1] !== undefined)
//
// let sort_predicate = (cell_1, cell_2) => cell_2[1] - cell_1[1]
// console.log(fractions_with_longest_seq.sort(sort_predicate)[0][0])

/**
 * Epr 27
 */

// import {isPrime} from "./utilities.js";
// let polynoms = []
//
// for (let i = -999; i < 1000; i++) {
//     for (let j = -1000; j < 1001; j++) {
//         polynoms.push([num => Math.pow(num, 2) + i * num + j, i, j, 0])
//     }
// }
//
// // console.log(polynoms)
//
// polynoms.forEach(polynom => {
//     let total_primes = 0
//     while(isPrime(polynom[0](total_primes))) {
//         total_primes++
//     }
//     polynom[3] = total_primes
// })
//
// let sort_predicate = (cell_1, cell_2) => cell_2[3] - cell_1[3]
// // console.log(polynoms.sort(sort_predicate))
// let sorted_consecutive_primes = polynoms.sort(sort_predicate)
// console.log(sorted_consecutive_primes[0][1] * sorted_consecutive_primes[0][2])

/**
 * Epr 28
 */

// let spiral_size = 1001
// let spiral = []
// let spiral_center = (spiral_size - 1) /2
//
// for (let i = 0; i < spiral_size; i++) {
//     let column = []
//     for (let j = 0; j < spiral_size; j++) {
//         column.push(0)
//     }
//
//     spiral.push(column)
// }
//
// let directions = ['N', 'E', 'S', 'W']
// let turtle = [spiral_center, spiral_center, 'N', 1]
//
// let advance_turtle = turtl => {
//     switch (turtl[2]) {
//         case 'N':
//             turtl[1]--
//             break
//         case 'E':
//             turtl[0]++
//             break
//         case 'S':
//             turtl[1]++
//             break
//         case 'W':
//             turtl[0]--
//             break
//     }
//
//     return turtl
// }
//
// let turtle_right_cell = turtl => {
//     switch (turtl[2]) {
//         case 'N':
//             return spiral[turtl[0] + 1][turtl[1]    ]
//         case 'E':
//             return spiral[turtl[0]    ][turtl[1] + 1]
//         case 'S':
//             return spiral[turtl[0] - 1][turtl[1]    ]
//         case 'W':
//             return spiral[turtl[0]    ][turtl[1] - 1]
//     }
// }
//
// let turn_turtle_right = turtl => {
//     return directions[(directions.indexOf(turtl[2])+1) % 4]
// }
//
// while(turtle[3] <= (spiral_size * spiral_size)) {
//     spiral[turtle[0]][turtle[1]] = turtle[3]
//
//     if(turtle_right_cell(turtle) === 0) {
//         turtle[2] = turn_turtle_right(turtle)
//     }
//
//     turtle = advance_turtle(turtle)
//     turtle[3]++
// }
//
// console.log(spiral)
//
// let diagonals_total = 0
//
// for (let i = 0; i < spiral_size; i++) {
//     diagonals_total += spiral[i][i]
// }
//
// for (let i = spiral_size - 1; i >= 0 ; i--) {
//     diagonals_total += spiral[spiral_size - 1 - i][i]
// }
//
// diagonals_total--
// console.log(diagonals_total)

/**
 * Epr 29
 */

// let powers = []
//
// let max_a = 100
// let max_b = 100
//
// for (let i = 2; i <= max_a; i++) {
//     for (let j = 2; j <= max_b; j++) {
//         let a_bigint = BigInt(i)
//         let b_bigint = BigInt(j)
//
//         let a_power_b = a_bigint ** b_bigint
//         if(!powers.includes(a_power_b))
//             powers.push(a_power_b)
//     }
// }
//
// console.log(powers.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0)))
// console.log(powers.length)

/**
 * Epr 30
 */

// let fifth_power_digit = num => {
//     let nums = num.toString().split('').map(split => parseInt(split))
//     return nums.reduce((acc, value) => acc + Math.pow(value, 5), 0) === num
// }
//
// let fifth_power_digits = []
//
// for (let i = 2; i < 10000000; i++) {
//     if(fifth_power_digit(i))
//         fifth_power_digits.push(i)
// }
//
// let total = fifth_power_digits.reduce((acc, value) => acc + value, 0)
// console.log(fifth_power_digits, total)
