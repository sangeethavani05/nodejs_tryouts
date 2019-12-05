const _ = require('lodash');

// const request = {
//     accountId: "",
//     userId: "",
//     sessionId: "",
//     reportId: "",
//     blockId: "",
//     fromDate: "",
//     toDate: ""
// };

// const response = {
//   status: "success",
//   data: {
//       title: "",
//       type: "",
//       kpiValue: "",
//       kpiUnit: "",
//       kpiStatus: "",   		 //increment/decrement
//       kpiChangedBy: "",
//       graphValues: [],
//
//   }
// };

// const daysCount = { 3:4, 4:6, 1:4, 6:2 };
// let arr = [];
// _.keys(daysCount).forEach(function(days) {
//     arr.push({label:days,value:daysCount[days]})
// })
// console.log(arr);


// daysCount.map = apn => {
//     return { label:apn[key], value:apn[value]}
// }
// console.log(daysCount);


// console.log(_.keys(daysCount));
// console.log(_.values(daysCount));
//
// _.keys(daysCount).forEach(function(day){
//     if(day >= 0 && day <= 7){
//         console.log(day);
//         console.log(_.values(daysCount[day]));
//     }
// });


// const dummy = {
//     status: 'success',
//     block: this.blocksLookUp[blockId],
//     list: [
//         {
//             account: 'Shell',
//             subAccounts: [{
//                 name: 'Jiffy Lube',
//                 kpi: {
//                     value: 43,
//                     change: 1,
//                     changeValue: '0.67%'
//                 },
//                 chartData: [{
//
//                 }]
//             }, {
//                 name: 'Quaker State',
//                 kpi: {
//                     value: 13,
//                     change: 1,
//                     changeValue: '0.34%'
//                 }
//             }]
//         }]
// };

// const data = require('./block');
//
// const tryout = JSON.stringify(data)
// const response = {
//     status: 'success',
//     data: tryout
// };
//
// console.log(data);

function count(n) {
    if (n === 1) {
        return [1];
    } else {
        var numbers = count(n - 1);
        numbers.push(n);
        return numbers;
    }
}

function getArray(x,y){
    if(x === y){
        return [x];
    } else if (x < y) {
        let result = getArray(x+1,y);
        result.push(x);
        return result;
    }
}

let answer = count(10);
let tryout = getArray(1,6);
// console.log(`answer ${answer}`);
// console.log(`tryout ${tryout}`);


let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);

// console.log(array);
// console.log(newArray);


var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    console.log(checkProp);
    return myObj.hasOwnProperty(checkProp) ? myObj.checkProp : 'Not Found';
}

// Test your code by modifying these values
//console.log(checkObj("gift"));


// var lastName = "Lovelace";
// let arr = ['1','selva','sangi'];
//
// const proxy = new Proxy(arr, {});
// // Only change code below this line
// var secondToLastLetterOfLastName = lastName[lastName.length - 2];
// console.log(lastName[5]);
// console.log(lastName[lastName.length - 3]);
// console.log(proxy[-1]);


const letters = ['a', 'b', 'c', 'd', 'e'];
const proxy = new Proxy(letters, {
    get(target, prop) {
        if (!isNaN(prop)) {
            prop = parseInt(prop, 10);
            if (prop < 0) {
                prop += target.length;
            }
        }        return target[prop];
    }
});
// console.log(proxy[0]); // => 'a'
// console.log(proxy[-1]); // => 'e'
// console.log(proxy[-2]); // => 'd'

const cargo = [34,56];
const toatalCargo = Array.sum(cargo);
console.log(toatalCargo);