// for(var i = 1; i < 5; i++) {
//     // setTimeout(function() {
//         console.log('Value of i with var : ' + i);
//     // },8000);
// }
//
// for(let i = 1; i < 5; i++) {
//     // setTimeout(function() {
//         console.log('Value of i with let : ' + i);
//     // },10000);
// }

const { compact } = require("lodash");

// const shape = {
//         radius: 10,
//         diameter() {
//                 console.log(this);
//                 return this.radius * 2;
//         },
//         perimeter(){
//                 console.log(this);
//                 return 2 * Math.PI * this.r;
//         }
// }
// console.log(shape.diameter());
// console.log(shape.perimeter);


// const a ={​a:1,b:2}​
// const b = {​...a}​
// b[a]=3
// console.log(a.a)

const a = {a: 1, b: 2}
const b = {...a}
b.a = 3
console.log('a: ',a)
console.log('b: ',b)
// a:  { a: 1, b: 2 }
// b:  { a: 3, b: 2 }


const c = {en: 1, de: 2}
const d = {...c}
d.de = 3
console.log('c: ',c)
console.log('d: ',d)