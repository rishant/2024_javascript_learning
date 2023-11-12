const myArr = [0,1,2,3,4,5,6,7,8]

const myHeors =  new Array(1,2,3,4,5,6,7,8);

console.log(myHeors)

myHeors.push(10)
console.log(myHeors)

myHeors.push(11)
console.log(myHeors)

myHeors.pop()
console.log(myHeors)

myHeors.shift() // Not good for performance.
console.log(myHeors)

myHeors.unshift(12) // Not good for performance.
console.log(myHeors)

console.log(myHeors.includes(12))
console.log(myHeors.indexOf(19))

console.log(myHeors.join(','))

console.log(myHeors.slice(1,3))     // Copy value from include starting index to exclude ending index.

console.log(myHeors.splice(1,3))    // Restructure original array itself.
