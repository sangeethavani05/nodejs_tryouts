// let moment = require('moment-timezone')
// let input = [1,1,2,1,4,2,5,11,3,2,5]
// let result = []

// for(let i = 0; i < input.length; i++){
//     if(!result.includes(input[i])){
//         result.push(input[i])
//     }
// }

// console.log(result)

// let unSortArray = [1,5,8,2,1,4,10]

// for(let i = 0; i < unSortArray.length; i++){
//     for(let j = i+1; j < unSortArray.length; j++){
//         let tmp = 0;
//         if (unSortArray[i] > unSortArray[j]) {
//             tmp = unSortArray[i];
//             unSortArray[i] = unSortArray[j];
//             unSortArray[j] = tmp;
//         }
//     }
// }
// console.log(unSortArray)

// let n = [23,323,23,556,667,453,4674,6564,6445,344];
// let p = 5

// let partitionArray = (n, p) => {
//     let array_size = Math.floor((n.length / p));
//     let big_array = []

//     for(let i = 1; i < p; i++){
//         let small_array = []
//         for(let j = 1; j <= array_size; j++){
//             small_array.push(n.shift())
//         }
//         big_array.push(small_array)
//         if(i + 1 == p){
//             big_array.push(n)
//         }
//     }
//     return big_array
// }

// let alternateSum = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i = i+2){
//         for(let j = 0; j < arr[i].length; j++){
//             sum = sum + arr[i][j];
//         }
//     }
//     return sum
// }

// let partitioned_array = partitionArray(n, p)
// console.log('partitioned_array: ',partitioned_array)
// let alternate_sum = alternateSum(partitioned_array)
// console.log('alternate_sum: ',alternate_sum)

// var a = [34, 35, 45, 48, 49];
// var b = [48, 55];
// var union = [...new Set([...a, ...b])];
// console.log(union)

// for(let i=1; i<=4; i++){
//     console.log("*".repeat(i));
//  }

// const printNumbersForEvery2Sec = (n)=>{
//     for (let i = 1; i <= n; i++) {
//         setTimeout( () =>{
//           console.log(i)
//         }, i * 2000)
//       }
//   }
//   printNumbersForEvery2Sec(10);

//   function letTest() {
//     let x = 1;
//     if (true) {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }
//   letTest();

// let one = moment.tz(new Date(), 'America/New_York').format('ddd MM/DD HH:mm A (z)');
// console.log('One: ',one)
// process.stdout.write('Hello World!' + '\n');

// process.argv.forEach(function(val, index, array) {
// 	console.log(index + ': ' + val);
// });

// process.on('exit', code => {
// 	setImmediate(() => {
// 		console.log('Will not get displayed');
// 	}, 0);

// 	console.log('Exited with status code:', code);
// });
// console.log('Execution Completed');