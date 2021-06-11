// entries() - Reyurns key value pair as array of arrays
const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
console.log(Object.entries(obj)[1]);

const obj2 = { 10: 'arvind', 2: 'rahul', 50: 'Ankit' };     
console.log(Object.entries(obj2)[1]);  // Based on key weight it takes order in array


// Delete
let obj1 = {name: 'Sangee', age: 25}
delete obj1.name
delete obj1.age
console.log(obj1)
