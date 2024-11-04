// let x = 2;
// let y = 3;
// let z;
// z = x + y;
// console.log(z);

// let a = 7;
// let b = 8;
// let c;
// c = a + b;
// console.log(c);

// function sum1() {
//   console.log(arguments);

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// sum1(2, 3, 4);

// console.log("------------------------");

// let sum2 = (...others) => {
//   console.log(others);
// };

// sum2(2, 3, 45, 14, 33, 67);

// (function (firstname, lastname) {
//     console.log(`${firstname} ${lastname}`);
// })("Ekber", "Zeynalli");

// fullName("Ekber", "Zeynalli");

// function faktorial(n) {
//   if (n == 0) {
//     return 1;
//   }
//   return n * faktorial(n - 1);
// }

// console.log(faktorial(1));

// let sum = (x, y) => x + y;
// let sub = (x, y) => x - y;
// let mul = (x, y) => x * y;
// let div = (x, y) => x / y;

// let calculate = (a, b, callback) => {

function sum(x, y) { }

return sum(x, y);

//   return callback(a, b);
// };

// console.log(calculate(20, 5, div));

// function number(num) {
//   return num;
// }
// let sum = number(5) + 5;

// console.log(sum);

//Closure

function count() {
  let counter = 0;

  return function () {
    return ++counter;
  };
}

let counter = count();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


// console.log(counter());
// console.log(counter());
// console.log(counter());
