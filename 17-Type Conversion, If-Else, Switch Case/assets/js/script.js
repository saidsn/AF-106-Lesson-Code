// let name = "Nihat";

// name = Number(name);
// name = +name
// name = parseInt(name)
// name = parseFloat(name)
// console.log(name);

// let x = true;

// x = String(x);

// console.log(x);

// console.log(0.1 + 0.2);
// console.log(NaN == NaN);
// console.log("5" - 3);
// console.log(true + true + true);
// console.log([] == []);
// console.log([] == 0);
// console.log(null);

//!alert
// let message = alert("Af 106 Welconme to the course");

//?confirm
// let isMarried = confirm("Are you married?");
// isMarried ? console.log("Yes") : console.log("No");
// console.log(isMarried);

//?prompt

// let day = prompt("Enter a day");
// console.log(day);

// let day = 5;

// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesday");
// } else if (day === 4) {
//   console.log("Thursday");
// } else if (day === 5) {
//   console.log("Friday");
// } else if (day === 6) {
//   console.log("Saturday");
// } else if (day === 7) {
//   console.log("Sunday");
// } else {
//   console.log("Invalid day");
// }

// switch (day) {
//   case "1":
//     console.log("Monday");
//     break;
//   case "2":
//     console.log("Tuesday");
//     break;
//   case "3":
//     console.log("Wednesday");
//     break;
//   case "4":
//     console.log("Thursday");
//     break;
//   case "5":
//     console.log("Friday");
//     break;
//   case "6":
//     console.log("Saturday");
//     break;
//   case "7":
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
//     break;
// }
let password = "1234";

let userPassword = prompt("Enter your password");

if (userPassword === password) {
  let myMoney = Number(prompt("Enter your money"));

  let text = "1-wiew balance\n2-get money\n3-depozit money\n4-exit";

  let operation = Number(prompt(text));

  switch (operation) {
    case 1:
      alert(`Your balance is ${myMoney}`);
      break;

    case 2:
      let amount = Number(prompt("Enter amount"));
      if (amount <= myMoney) {
        myMoney -= amount;
        alert(`You get ${amount} manat. Your balance is ${myMoney} manat`);
      } else {
        alert(
          `You don't have enough money. Your balance is ${myMoney} manat. Your missing money is ${
            amount - myMoney
          }`
        );
      }
      break;
    case 3:
      let depositAmount = Number(prompt("Enter deposit amount"));
      if (depositAmount >= 2000) {
        alert(`You can't deposit more than 2000 manat`);
      } else {
        myMoney += depositAmount;
        alert(
          `You deposit ${depositAmount} manat. Your balance is ${myMoney} manat`
        );
      }
      break;
    case 4:
      alert("Goodbye kartinizi unutmayin");
      break;
    default:
      alert("Invalid operation. You can choose only 1, 2, 3, 4");
      break;
  }
} else {
  alert("Invalid password");
}
