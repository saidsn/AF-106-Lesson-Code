let msg = `Welconme to the OBA market!`;
alert(msg);
let products = [
//   {
//     name: "Alma",
//     price: 30,
//   },
//   {
//     name: "Kolbasa",
//     price: 25,
//   },
//   {
//     name: "Sud",
//     price: 45,
//   },
];

let result = confirm("Do you have a discount card?");

let amount;
let name = prompt("Enter your name");
let surname = prompt("Enter your surname");
if (result) {
  const client = new Client(name, surname, result, products);
  amount = client.send();
  alert(`About Client: ${name} ${surname}\n Total amount: ${amount}`);
} else {
  const client = new Client(name, surname, result, products);
  amount = client.send();
  alert(`About Client: ${name} ${surname}\n Total amount: ${amount}`);
}
