"use strict";

// function getUsers() {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "http://localhost:3001/users", true);

//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let users = JSON.parse(xhr.responseText);
//       console.log(users);
//     } else {
//       console.log(xhr.status);
//     }
//   });

//   xhr.send();
// }
// let getBtn = document.querySelector(".get");
// getBtn.addEventListener("click", getUsers);

// function addUser() {
//   let xhr = new XMLHttpRequest();

//   xhr.open("POST", "http://localhost:3001/user", true);

//   xhr.addEventListener("readystatechange", () => {
//     if (xhr.readyState === 4 && xhr.status === 201) {
//       console.log(xhr.responseText);
//     } else {
//       console.log(xhr.status);
//     }
//   });

//   let newUser = {
//     id: 6,
//     name: "Ali",
//     age: 20,
//   };

//   xhr.setRequestHeader("Content-Type", "application/json");

//   xhr.send(JSON.stringify(newUser));
// }

// let addBtn = document.querySelector(".add");
// addBtn.addEventListener("click", addUser);
// let promise = new Promise((resolve, reject) => {
//   resolve("Hello");
//   reject("Error");
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(promise);

// function getUsers() {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "http://localhost:3001/users", true);

//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let users = JSON.parse(xhr.responseText);
//       return users
//     } else {
//       console.log(xhr.status);
//     }
//   });

//   xhr.send();
// }

// function getUsers() {
//   let id = Number(prompt("Enter the id: "));
//   fetch("http://localhost:3001/users")
//     .then((response) => response.json())
//     .then((datas) => {
//       let findData = datas.find((data) => parseInt(data.id) === id);
//       console.log(findData);
//     })
//     .catch((err) => console.log(err));
// }
// let getBtn = document.querySelector(".get");
// getBtn.addEventListener("click", getUsers);

// let addUser = () => {
//   fetch("http://localhost:3001/users", {
//     method: "POST",
//     headers: {
//       ContentType: "application/json",
//     },
//     body: JSON.stringify({
//       id: 7,
//       name: "Seda",
//       age: 19,
//     }),
//   });
// };

let getBtn = document.querySelector(".get");
getBtn.addEventListener("click", getUsers);

// function getUsers() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
//         .then((response) => response.json())
//         .then((comments) => console.log(comments))
//         .catch((err) => console.log(err));
//     })
//     .catch((err) => console.log(err));
// }

async function getUsers() {
  let post = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  let comments =  await (
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    )
  ).json();
  console.log(comments)
}
getUsers()
console.log("Hello")