// 1. Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?

type UserInput = string | number;
function firstEl(arr: UserInput[]) {
    return arr[0]
}

const firstVal = firstEl([1, 2]);
const firstStrVal = firstEl(["a", "b"]);
console.log(firstStrVal, firstVal)



// generics example
function identity<T>(arg: T) {
    return arg;
}
let output1 = identity("hey");
let output2 = identity(2);

// using generics TS can understand output1 is a string.
console.log(output1.toUpperCase())


// return firstElment with generics
function firstEl2<T> (arr: T[]) {
    return arr[0]
}

let first = firstEl2(["a", "b"]);
console.log(first.toUpperCase());
