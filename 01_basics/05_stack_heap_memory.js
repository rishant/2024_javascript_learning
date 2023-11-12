// Stack (Primitives): retrun COPY of memory value.
let name = "Rishant"
// console.log(name);

let name2 = name;  // Call by value.
// console.log(name2);

name2 = "Rishant Gupta"
console.log(name2);
console.log(name);

// Heap (Non-primitive): return memory Reference.

let userOne = {
    email: "user@example.com",
    upi: "user@ybl"
}
// console.log(userOne);

let userTwo = userOne   // call by Reference.
// console.log(userTwo);

userTwo.email = "user2@example.com"
console.log(userTwo);
console.log(userOne);
