// let arr = [3, 4, 5, 1, 22, 23, 56, 44];
let str = "Hello World";

//!Search and Find

// arr = arr.indexOf(1);
// arr = arr.lastIndexOf(22);
// str = str.includes("Hello!")
// str = str.includes("kitab")
// arr = arr.find((item) => item > 1);
// arr = arr.some((item)=> item > 5 )
// arr = arr.every((item)=>item > 1)

//!Modification

// arr.splice(2, 2, 22, 12);
// arr.fill(44, 0, 2);
// arr.copyWithin(3, 0, 2);

//!Iteration

// arr.forEach((element) => {
//   console.log(element);

// });

// arr = arr.map((item) => {
//   return item * 2;
// });

// let arr = [23, 3, 4, 56, 5, 1, 22, 44];
// let arr1 = ["Hello", "World", "JavaScript", "React", "Node", "Express"];
// arr = arr.filter((item, i) => i > 5);
// arr = arr.reduceRight((acc, item) => acc + item, 100);
// arr.sort((a, b) => b - a);
// arr.reverse()

// arr=  arr.concat(arr1);
// arr = arr.flat();
// arr = arr.join("-")

// arr = arr.entries()
// for (const element of arr) {
//     console.log(element);
// }

// arr = arr.at()
// console.log(arr);

//! Optional chaining (?.)

// let user = {
//   name: "Mehemmed",
//   age: 19,
//   hobbies: null,
//   status: "student",
//   contact: {
//     email: "meh@gmail.com",
//     phone: 123456,
//     address: {
//       city: "Baku",
//       country: "Azerbaijan",
//     },
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.veli?.city?.name ?? "City is not defined");

// if (user.contact.city == undefined || user.contact.city == null) {
//     console.log("City is not defined");
// } else {
//     console.log(user.contact.city.name);
// }

// console.log(0 ?? 45);

// let title = document.querySelector("h2")?.textContent;
// console.log(title);

// let frontEnd = ["HTML", "CSS", "JavaScript"];
// let backEnd = ["Node", "Express", "MongoDB"];

// let middle = ["kitab", "komp", "Defter", "Qelem"];

// let fullStack = [...frontEnd, ...backEnd];

// let arr = [0, ...middle, 5, 6, 7];
// console.log(arr);
// let product = [...middle, "Su"];
// product = [...product,"cay"];
// console.log(product);
// let arr = [1, 2, 3];

// let sum = (...arr) => {
//   console.log(arr);

//   return arr.reduce((acc, item) => acc + item, 0);
// };

// console.log(sum(1, 2, 3));

// console.log(fullStack);

let user = {
  name: "Mehemmed",
  age: 19,
  status: "student",
};
// user.country = "Azerbaijan";
// console.log(user.country);

// let name, age, status;

// name = user.name
// age = user.age
// status = user.status

// console.log(name, age, status);

// let { name:add, ...others} = user

// console.log(add, others);

let arr = ["Seda", "Novruz", "19", "Azerbaycan"];

// let name, surname, age, country;

// name = arr[0];
// surname = arr[1];
// age = arr[2];
// country = arr[3];

// console.log(name, surname, age, country);

// let [name,,,country] = arr;
// console.log(name,  country);

let say = {
  surname: "Hesenov",
  output: function () {
    console.log(say.name);
  },
  name: "Cavid",
};

say.output();
