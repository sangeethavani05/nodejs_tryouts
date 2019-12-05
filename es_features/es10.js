// ES 10 Features tryout

// fromEntries - array to json

const users = [['John', 49], ['Frank', 25], ['David', 36]];
const usersAge = Object.fromEntries(users);
console.log(usersAge);

// flat - flattern an array

const cities = ['City 1', ['City 2'], ['City 3', 'City 4']];
console.log(cities.flat());

// flatmap - Map array to json

const usersList = [['John', 49, 96], ['Frank', 25, 388], ['David', 36, 14]];
const usersFlattened = usersList.flatMap(([name, age, followers]) => {
    return { name, age, followers };
});
console.log(usersFlattened);

// trimStart - Remove whitespace in starting of a string
// trimEnd - Remove whitespace in ending of a string

const message = '   Hello ES10   ';

console.log(message.trimStart()); // outputs 'Hello ES10   '
console.log(message.trimEnd()); // outputs '   Hello ES10'
console.log(message); // outputs '   Hello ES10   '

const byteSize = str => new Blob([str]).size;
console.log(byteSize('Hi'));