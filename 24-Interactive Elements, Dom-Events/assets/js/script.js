// let cardBody = document.createElement("div");
// cardBody.className = "card-body";

// let h5 = document.createElement("h5");
// h5.className = "card-title";
// h5.textContent = "Card title";

// let p = document.createElement("p");
// p.className = "card-text";
// p.textContent =
//     "Some quick example text to build on the card title and make up the bulk of the card's content.";

// let a = document.createElement("a");
// a.href = "#";
// a.className = "btn btn-primary";
// a.textContent = "Go somewhere";

// let btn = document.createElement("button");
// btn.textContent = "Click me";
// btn.className = "btn btn-warning";
// // btn.type = "submit";
// btn.setAttribute("type", "submit");

// cardBody.appendChild(h5);
// cardBody.appendChild(p);
// cardBody.appendChild(a);
// cardBody.appendChild(btn);

// let card = document.querySelector(".card");
// card.appendChild(cardBody);

// // let carBody = document.querySelector(".card-body");
// // carBody.appendChild(btn);

// let list = document.querySelector(".list-group");
// // li1.remove();

// // console.log(li1)

// let newLi = document.createElement("li");
// newLi.className = "list-group-item";
// newLi.textContent = "New Item";

// // list.replaceChild(newLi, list.children[4]);

// let li1 = document.querySelector(".list-group").children[0];

// li1.replaceWith(newLi);

// let cardBody = document.querySelector(".card-body");
// // let changeTitle = () => {
// //   document.querySelector("h5").textContent = "Change Title";
// // };

// cardBody.addEventListener("mousedown", test);
// // cardBody.addEventListener("mouseenter", test);

// function test(e) {
//     console.log(e.target.textContent)
// }

// let input = document.querySelector("input");

// input.addEventListener("focus", (e) => {
//     console.log(e.type)
// })
// let a = document.querySelector("a");

// a.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// let form = document.querySelector("form");
// let h5 = document.querySelector("h5");

// form.addEventListener("submit", (e) => {
//   let name = document.querySelector(".name").value;
//   let surname = document.querySelector(".surname").value;
//   e.preventDefault();
//   h5.textContent = `Hello ${name} ${surname}`;
// });

let sum = document.querySelector(".sum");
let result = document.querySelector(".result");

sum.addEventListener("click", Sum);

function Sum() {
  let numberOne = document.querySelector(".numberOne").value;
  let numberTwo = document.querySelector(".numberTwo").value;
  result.textContent = parseInt(numberOne) + parseInt(numberTwo);
  document.querySelector(".numberOne").value = "";
  document.querySelector(".numberTwo").value = "";
}
