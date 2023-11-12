// String Interpolation using backtick notation ``

let name = "rishant"
let repoCount = 50;
console.log(`Hello my name is '${name}' and my repo count is '${repoCount}'`);

const gameName = new String('rishant');

console.log(gameName[0])
console.log(gameName.__proto__);

// String methods.
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

// substring
// splice
// trim
// replace
// includes
// split
// join

console.log(gameName.startsWith('r'))
console.log(gameName.endsWith('t'))