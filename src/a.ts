let age: number = 90;
console.log(age);

function sayHello(name: string | number) {
  console.log("Hello, " + name);
}

sayHello("Anand");
sayHello(5);

function findSum(num1: number, num2: number): { num1: string } {
  return {
    num1: "hello",
  };
}

// if not specified the return type , ts will infer the type
const findUser = (age: number) => {
  if (age >= 18) {
    return true;
  }
  return false;
};

// its better to explicitly specify the type
const isValid: boolean = findUser(50);

const sum = findSum(1, 2);
console.log(sum.num1.length);

// create fn. accepts one argument as another fn. and run it after one second.

function sumAndPrint(num1: number, num2: number, cb: (value: number) => boolean) {
  let sum = num1 + num2;

  setTimeout(() => {
    cb(sum);
  }, 1000);
}

function print(value: number) {
  console.log(value);
  return true
}

sumAndPrint(5, 6, print);
//yo



interface User {
  name: string,
  age: number
}

let user1: User = {
  name: "abc",
  age: 4
};

const checkAge = (u: User) => {
    if (u.age > 18) {
      return true
    } 
   return false
}

checkAge(user1);