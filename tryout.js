// const _ = require('lodash');
// const moment = require('moment')
// var express = require('express')
// var morgan = require('morgan')
 
// var app = express()
 
// app.use(morgan('combined'))

// app.listen(8000)
 
// app.get('/', function (req, res) {
//   res.send('hello, world!')
// })

var X = { Foo : 1}; 
var output = (function() 
{ 
delete X.foo; 
return X.foo; 
} 
)(); 
console.log(output);
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

// function count(n) {
//     if (n === 1) {
//         return [1];
//     } else {
//         var numbers = count(n - 1);
//         numbers.push(n);
//         return numbers;
//     }
// }

// function getArray(x,y){
//     if(x === y){
//         return [x];
//     } else if (x < y) {
//         let result = getArray(x+1,y);
//         result.push(x);
//         return result;
//     }
// }

// let answer = count(10);
// let tryout = getArray(1,6);
// console.log(`answer ${answer}`);
// console.log(`tryout ${tryout}`);


// let array = ['I', 'am', 'feeling', 'really', 'happy'];

// let newArray = array.splice(3, 2);

// console.log(array);
// console.log(newArray);


// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
//     // Your Code Here
//     console.log(checkProp);
//     return myObj.hasOwnProperty(checkProp) ? myObj.checkProp : 'Not Found';
// }

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


// const letters = ['a', 'b', 'c', 'd', 'e'];
// const proxy = new Proxy(letters, {
//     get(target, prop) {
//         if (!isNaN(prop)) {
//             prop = parseInt(prop, 10);
//             if (prop < 0) {
//                 prop += target.length;
//             }
//         }        return target[prop];
//     }
// });
// console.log(proxy[0]); // => 'a'
// console.log(proxy[-1]); // => 'e'
// console.log(proxy[-2]); // => 'd'

// const cargo = [34,56];
// const toatalCargo = Array.sum(cargo);
// console.log(toatalCargo);

// const person = {
//     name: "Sarah",
//     place: {
//     country: "Nigeria",
//     city: "Lagos" },
//     friends : ["Annie", "Becky"]
//     };

// const {name,
//     place: {
//     country ,
//     city }
//     } = person;
    
// console.log(`${name}`);//"Sarah"
// console.log(`${country}`);//"Nigeria"

// const input = {
//     SecretString: '"{ INT: 123 }"'
// }

// const value = JSON.parse(input);
// console.log(value)
// //const {temp} = value
// console.log(value.SecretString.INT)

// let data = [
//     {
//       language_id: 43,
//       identifier: 'RSA_ENGLISH',
//       type: 'TMMLiveLanguage'
//     },
//     {
//       language_id: 33,
//       identifier: 'AUS',
//       type: 'AriaLanguage'
//     },
//     {
//       language_id: 54,
//       identifier: 'WW-ENG',
//       type: 'WwEnglish'
//     },
//     {
//       language_id: 68,
//       identifier: 'YP-ENG',
//       type: 'YourPlan'
//     },
//     {
//       language_id: 55,
//       identifier: 'FB-ENG',
//       type: 'FluencyBuilder'
//     },
//     {
//       language_id: 7,
//       identifier: 'ENG',
//       type: 'TotaleLanguage'
//     },
//     {
//         language_id: 7,
//         identifier: 'FRA',
//         type: 'TotaleLanguage'
//       }
//   ]

// let myFunction = (req) => {
//   return new Promise(async (resolve,reject) => {
//     try{
//       let lang_filter = req.map((lang) => { return lang.identifier.includes('-') ? lang.identifier.split('-')[1] : lang.identifier})
//       console.log(lang_filter)
//       let result = _.countBy(lang_filter)
//       console.log(result)
//       let final_result = await Promise.all(Object.keys(result).filter(async(oneData) => {
//         if(result[oneData] > 1){
//           console.log('Inside filter',req)
//           req.push(oneData)
//           return true
//         }
//         else{
//           return false
//         }
//       }))
//       console.log(final_result)
//       console.log(req)      
//     }
//     catch(e){

//     }
//   })
// }
    
// let cpeligiblecoach = async (req) => {​​​​​​​
//   return new Promise(async (resolve, reject) => {​​​​​​​
//     try {​​​​​​​
//       //let lang_filter = req.filter((lang) => lang.identifier.includes('-') ?  lang.identifier.substring(lang.identifier.lenght - 3) : lang.identifier)
//       let und_lang = _.pluck(req, "identifier");
//       var newarr = _.map(und_lang, function(lang) {​​​​​​​return lang.includes("-") ? lang.substring(lang.length - 3) : lang}​​​​​​​)
//       console.log(newarr, "newarr")
//       const result =  newarr.reduce((json,val)=>({​​​​​​​...json, [val]:(json[val] | 0) + 1}​​​​​​​),{​​​​​​​}​​​​​​​);
//       console.log(result, "result")
//       const testt = await Promise.all(await Object.keys(result).filter(async (k) => {​​​​​​​
//       console.log(k, result[k])
//           if (parseInt(result[k]) > 1){​​​​​​​
//             // var identifier = "CP-"+ k 
//             // var query = sql_string.format(queries.findCPlanguage, [identifier])
//             // var languages =  await this.dbAdapter.ExecuteQuery(query)
//             req.push(_.reduce("Sangi"))
//             return true
//           }​​​​​​​


//       }​​​​​​​));
//       console.log(testt, "test")
//       console.log(req, "request")
//       resolve ("languages");
//     }​​​​​​​ catch (x) {​​​​​​​
//       this.log.debug ("cpeligiblecoach", x)
//       reject (x)
//     }​​​​​​​
//   }​​​​​​​)
// }​​​​​​​

  
  
  

// let lang_filter = data.filter((oneData) => oneData.identifier.includes('-') ? oneData.identifier.substring() )
// let result = data.filter((e) => e.identifier.includes('ENG'))
// console.log(result);

// let start_time = "2021-05-05 07:00:00"
// let sample = new Date(start_time)
// var t = new Date(start_time);
// console.log(t)
// t.setSeconds(t.getSeconds() - 01);
// console.log(t)

// const startOfMonth = moment(start_time).clone().startOf('month').format('YYYY-MM-DD hh:mm:ss');
// const endOfMonth   = moment(start_time).clone().endOf('month').format('YYYY-MM-DD hh:mm:ss');

// console.log(`${startOfMonth}\n${endOfMonth}`)

// const activities = [
//     { title: 'Hiking', date: new Date('2019-06-28') },
//     { title: 'Shopping', date: new Date('2019-06-10') },
//     { title: 'Trekking', date: new Date('2019-06-22') }
//   ]

// let filteredData = activities.filter(data => data.title == 'Hiking' ? data.date : false)
// console.log(filteredData)
// const sortedActivities = activities.sort((a, b) => b.date - a.date)

// console.log(sortedActivities)

// let my_date = '2021-05-07 06:00:00 -0400'

// // Fri May 07 09:00:00 UTC 2021
// // console.log(new Date(my_date))

// let result = moment.utc(new Date(my_date)).add(1,'hour').format('ddd MMM DD HH:mm:ss z YYYY');
// console.log(result)