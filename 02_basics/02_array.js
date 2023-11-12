let myArr1 = [1,2,3,4,5]
let myArr2 = [6,7,8,9,10]

// Array concat Operation 
const newArr3 = myArr1.concat(myArr2)
console.log(newArr3)

// Array Spread Operation 
const newArr4 = [...myArr1, ...myArr2]
console.log(newArr4)

// Array Flat Operation 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const flat_another_array = another_array.flat(Infinity)
console.log(flat_another_array)