// Collection of Unique elements, Ordered
const mySet = new Set([0,1,3,4,'Sangee']);
console.log(mySet);

// Size of Set
console.log(mySet.size)

// Add elements
mySet.add('Briyani')
console.log(mySet)

// Not allow duplication
mySet.add('Briyani')
console.log(mySet)

// Is Set has an element
console.log(mySet.has(3))

// Delete an element - Only deletes the first value
mySet.delete(0,4)
console.log(mySet)

// Iterable Set
console.log(mySet.values())
console.log(mySet.keys())
console.log(mySet.entries())

// with forEach
mySet.forEach((value) => {
    console.log(value);
});
 
// with for-of
 
for(const value of mySet) {
    console.log(value);
}

// Set to Array
let myArr = [...mySet]
console.log(myArr)

// Array to Set - Removes duplicate values
let newSet = new Set(myArr)
console.log(newSet)

// Object can be an element of Set
const person = {
    name: 'Esai'
}
newSet.add(person)
console.log(newSet)

// Modifying Object value
person.name = 'Lucky'
console.log(newSet)

// Clear all elements in set
mySet.clear()
console.log(mySet)
