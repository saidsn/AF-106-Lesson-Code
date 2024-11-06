// let str;

// str = "       Welcome to the world of JavaScript! the            ";
// // str = str.concat(" Have a nice day!");
// // str = str.startsWith("Welcome");
// // str = str.endsWith("JavaScript!");
// // str = str.includes("of")
// // str = str.indexOf("world")
// // str = str.lastIndexOf("the")
// // str = str.padStart(41, "?");
// // str = str.padEnd(41, "?");
// // str = str.repeat(2);
// // str = str.replace("Welcome", "Hello")
// // str = str.slice(2,5)
// // str = str.split("")
// // for (let i = 0; i < str.length; i++) {
// //     console.log(str[i]);

// // }
// // str = str.slice(-10, -1);

// // str = str.trim()
// let num;

// // console.log(str);
// // num = Math.floor(3.0000001)
// // num = Math.ceil(9.01)
// // let arr = [-34, 1, 2, 3, 4, 5, 6, 3000, 7, 8, 9]
// num = Math.ceil(Math.random() * 20);
// // if (num < 20) {
// // }
// console.log(num);

// let date = new Date();
// console.log(typeof date);
// console.log(date.toISOString());

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getHours());
// console.log(date.getHours());
// console.log(date.setTime(9));

// let map = new Map([
//   ["name", "Anar"],
//   ["age", "23"],
//   ["email", "anar@gmail.com"],
//   ["status", "student"],
// ]);
// console.log(map);

let map = new Map();

map.set("name", "Anar");
map.set("age", "23");
map.set("hobbies", ["coding", "reading", "swimming"]);
map.set("address", { city: "Baku", country: "Azerbaijan" });
map.set("status", "student");
map.set("surname", "Anar");

console.log(map);


// console.log(map.get("hobbies"));
// console.log(map.get("address").city);
// console.log(map.get("hobbies"));

// console.log(map.has("hobbies"));
// console.log(map.delete("hobbies"));

// map.clear()
// console.log(map);
// console.log(map.keys());

// let keys = map.keys();
// for (const key of keys) {
//   console.log(key);
// }

// let values = map.values();
// console.log(values);

// for (const value of values) {
//   console.log(value);
// }

// map.forEach((value, key) => {
//   console.log(key, value);
// });

// let array = new Array(["name", "Anar",], ["age", 25], ["status", "student"]);
// console.log(array);

// let map1 = new Map(array);

// console.log(map1);

let set = new Set();

set.add("Anar");
set.add(["coding", "reading", "swimming"]);
set.add({ city: "Baku", country: "Azerbaijan" });
set.add("student");

// let keys = set.keys();
// let values = set.values();

// console.log(keys);
// console.log(values);
// console.log(set.);

