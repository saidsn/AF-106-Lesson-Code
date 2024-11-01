// let names = ["John", "Paul", "George", "Ringo"];
// console.log(names);
// console.log(number);

// let mix = [
//   1,
//   "John",
//   true,
//   2.34,
//   undefined,
//   null,
//   { name: "Idris", age: 19 },
//   [1, 2, 3, 4],
// ];
// let obj = mix[6]
// // let lastItem = mix[mix.length - 1];
// console.log(obj.name);

// number[6] = "Nihat"
// console.log(number);
// number.length = 10;
// number[8] = "Nihat";
// number[5] =null

// number[0] = true
// number[number.length] = "Nihat"

//array sonunda is gormek
// number.push("Nihat");
// number.pop();

// //array basinda is gormek
// number.unshift("Seda")
// number.shift()

// console.log(number);

//! Object

// let obj = new Object();

// obj.name = "Nergiz";
// obj.age = 20;
// obj.hobbies = ["music", "movie"];
// obj.isStudent = true;
// obj.address = {
//   city: "Istanbul",
//   country: "Turkey",
// };
// obj.smm = function () {
//   console.log("Hello");
// };
// let count = 0;

// let person = {
//   name: "Nergiz",
//   age: 20,
//   hobbies: ["music", "movie"],
//   isStudent: true,
//   address: {
//     city: "Istanbul",
//     country: "Turkey",
//   },
//   smm: function () {
//     // console.log("Hello");
//     count++;
//     return `Hello ${count}`;
//   },
// };

// console.log(person.smm());

//!loops

// let num = [99, 2, 134, 5, 11, 7, 8, 9, 5];
// console.log(num[0]);
// console.log(num[1]);

// let fak = 1;

// let num = Number(prompt("Enter a number: "));

// for (let i = 1; i <= num; i++) {
//    fak  = fak * i
// }

// alert(fak)

// for (let i = 0; i < num.length; i++) {
//     if (num[i] == 7) {
//         continue;
//     }
//     console.log(num[i]);
// }

// let num = 0;

// // while (num < 10) {
// //   console.log(num);
// //   num++;
// // }

// do {
//     console.log(num);
//     num++;
// } while (num < 10);

let password = "1234";
let userPassword = prompt("Enter your password");

if (password === userPassword) {
  let myMoney = Number(prompt("Enter your initial balance"));
  let operation;

  while (operation !== 4) {
    let text = "1-view balance\n2-get money\n3-deposit money\n4-exit";
    operation = Number(prompt(text));

    switch (operation) {
      case 1:
        alert(`Your balance is ${myMoney} manat`);
        break;

      case 2:
        let amount = Number(prompt("Enter amount to withdraw"));
        if (amount <= myMoney) {
          myMoney -= amount;
          alert(
            `You withdrew ${amount} manat. Your balance is ${myMoney} manat`
          );
        } else {
          alert(
            `You don't have enough money. Your balance is ${myMoney} manat. You need ${
              amount - myMoney
            } more manat.`
          );
        }
        break;

      case 3:
        let depositAmount = Number(prompt("Enter amount to deposit"));
        if (depositAmount > 2000) {
          alert("You can't deposit more than 2000 manat");
        } else {
          myMoney += depositAmount;
          alert(
            `You deposited ${depositAmount} manat. Your balance is ${myMoney} manat`
          );
        }
        break;

      case 4:
        alert("Goodbye! Don't forget your card.");
        break;

      default:
        alert("Invalid operation. You can choose only 1, 2, 3, or 4.");
        break;
    }
  }
} else {
  alert("Invalid password");
}

// if (userPassword === password) {
//   let myMoney = Number(prompt("Enter your money"));

//   let text = "1-wiew balance\n2-get money\n3-depozit money\n4-exit";

//   let operation = Number(prompt(text));

//   switch (operation) {
//     case 1:
//       alert(`Your balance is ${myMoney}`);
//       break;

//     case 2:
//       let amount = Number(prompt("Enter amount"));
//       if (amount <= myMoney) {
//         myMoney -= amount;
//         alert(`You get ${amount} manat. Your balance is ${myMoney} manat`);
//       } else {
//         alert(
//           `You don't have enough money. Your balance is ${myMoney} manat. Your missing money is ${
//             amount - myMoney
//           }`
//         );
//       }
//       break;
//     case 3:
//       let depositAmount = Number(prompt("Enter deposit amount"));
//       if (depositAmount >= 2000) {
//         alert(`You can't deposit more than 2000 manat`);
//       } else {
//         myMoney += depositAmount;
//         alert(
//           `You deposit ${depositAmount} manat. Your balance is ${myMoney} manat`
//         );
//       }
//       break;
//     case 4:
//       alert("Goodbye kartinizi unutmayin");
//       break;
//     default:
//       alert("Invalid operation. You can choose only 1, 2, 3, 4");
//       break;
//   }
// } else {
//   alert("Invalid password");
// }
