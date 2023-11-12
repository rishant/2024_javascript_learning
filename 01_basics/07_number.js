let score = 499

console.log(score)
console.log(typeof score)

score = "100"
console.log(score)
console.log(typeof score)

let balance = new Number(score)
console.log(balance)
console.log(typeof balance)

console.log(`value: ${balance.toString()} and length: ${balance.toString().length}`)

balance = 1240.894234134

//toFixed (after dot how many should be fixed)
console.log(`value: ${balance.toFixed(2)}`)

// toPrecision (Overall precision value with given precision range) example if precision = 3 then value come into exponential form.
console.log(`value: ${balance.toPrecision(3)}`)

// toLocaleString
console.log(`value: ${balance.toLocaleString()}`)
console.log(`value: ${balance.toLocaleString('en-IN')}`)
