const myMap = new Map([
    ['name', 'Sangee'],
    ['wish', 'Briyani'],
    [2, 3],
  ]);

console.log(myMap)

// Take first two params, Key may be boolean, array, string, anything
myMap.set(true, 8 , 9)

// Value Replaced
myMap.set('wish','Ice Cream')

// Object as Key
let obj = {'name': 'tapas'}
myMap.set(obj, true); // object as key
myMap.set([2,3,45],78); // array as key

console.log(myMap)
console.log(myMap.get('wish'))

// Size property
console.log(myMap.size)

// Search Element
console.log(myMap.has('name'))
console.log(myMap.has('age'))

// Can delete element
myMap.delete(2)
console.log(myMap)

// Map Iterator
console.log(`<-------------- Map Iterator ------------->`)
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// with forEach
myMap.forEach((value, key) => {
    console.log(`${key} is ${value}`);
});
 
// with for-of
for(const [key, value] of myMap) {
console.log(`${key} is ${value}`);
}

// Can delete all elements
myMap.clear()
console.log(myMap)

// Convert Object to Map
console.log(`<-------------- Object to Map -------------->`)
const address = {
    'Tapas': 'Bangalore',
    'James': 'Huston',
    'Selva': 'Srilanka'
};
  
const addressMap = new Map(Object.entries(address));
console.log(addressMap)

// Convert Map to Object
let data = Object.fromEntries(addressMap)
console.log(data)

// Convert Map to Array - Way 1
let array1 = Array.from(addressMap)
console.log(array1)

// Convert Map to Array - Way 2
let array2 = [...addressMap]
console.log(array2)
