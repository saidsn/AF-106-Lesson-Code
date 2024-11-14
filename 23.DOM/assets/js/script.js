// let value;
// // value = document.location.host
// // value = document.location.hostname
// value = Array.from(document.links);
// value.forEach((element) => {
//   console.log(element);
// });

// console.log(value);

// let form = Array.from(document.forms[0].children);
// form.forEach((element) => {
//   console.log(element.getAttribute("type"));
// });

// console.log(document)

// //! 1. Get Element By ID

// let input = document.getElementById("name")
// console.log(input)

// //! 2. Get Element By Class Name

// // let input = document.getElementsByClassName("btn");

// // let classList = input[0].classList

// // classList.forEach((element) => {
// //     console.log(element)
// // });

// //! 3. Get Element By Tag Name

// let head = document.getElementsByTagName("h1")[0].classList
// console.log(head)

//! 4. Query Selector

// let inputs = document.querySelectorAll(".input");

// console.log(inputs)

// inputs.forEach((input) => {
//   console.log(input);
// });

// let btn = document.querySelector("#button")

// console.log(btn)

// let head1 = document.querySelector(".price");
// console.log((head1.innerHTML = "<p>hello</p>"));

// // let head2 = document.querySelector(".price").innerHTML;
// // console.log(head2);

// let inputs = document.querySelectorAll(".input");

// inputs.forEach((input) => {
//   console.log(input.value);
// });

// let div = document.querySelector(".test .price").textContent
// console.log(div)

// let title = document.querySelector(".card-title")
// title.style.color = "red"
// title.style.background = "green"
// title.style.fontSize = "30px"
// title.style.fontWeight = "bold"
// title.style.padding = "10px"
// title.style.margin = "10px"

// console.log(title)

let btn = document.querySelector(".btn");

let card = btn.closest(".card");
let img = card.querySelector(".card-img-top").src;
let title = card.querySelector(".card-title").textContent;
let price = card.querySelector(".price").textContent;
let text = card.querySelector(".card-text").textContent;

// let img = btn.parentNode.previousElementSibling.src;
// let title = btn.parentNode.firstElementChild.textContent;
// let price = btn.parentNode.firstElementChild.nextElementSibling.textContent;
// let text = btn.previousElementSibling.textContent;

let obj = {
  img,
  title,
  price,
  text,
};
console.log(obj);
