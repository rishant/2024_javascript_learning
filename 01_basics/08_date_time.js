// date with be into milliseconds and started from January 1, 1970.

let date = new Date();

console.log(typeof date);

console.log(date.toString())

console.log(date.toDateString())
console.log(date.toTimeString())

console.log(date.toISOString())
console.log(date.toUTCString())

console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleString('default', {
    weekday: 'long'
}))


console.log(date.toJSON())

date = new Date(2023,0,23);
console.log(date.toString())


date = new Date("01-14-2023");
console.log(date.toString())