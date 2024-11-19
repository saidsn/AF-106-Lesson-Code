// localStorage.setItem("name", "Ekber");
// localStorage.setItem("age", 25);
// localStorage.setItem("isStudent", true);

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// let isStudent = localStorage.getItem("isStudent");
// console.log(name);
// console.log(age);
// console.log(isStudent);

// let person = {
//   name: "Servan",
//   age: 19,
//   isStudent: false,
// };

// localStorage.setItem("person", JSON.stringify(person));

// let obj = JSON.parse(localStorage.getItem("person"));

// console.log(obj);

// let users = [
//   { name: "Nergiz", age: 20 },
//   { name: "Aytac", age: 19 },
//   { name: "Seda", age: 19 },
// ];
// localStorage.setItem("users", JSON.stringify(users));
// let localUsers = JSON.parse(localStorage.getItem("users"));
// console.log(localUsers);

// localStorage.removeItem("name")
// localStorage.removeItem("users");
// localStorage.removeItem("person")
// localStorage.clear();

// sessionStorage.setItem("name", "Ekber");

document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users"));

  let loginBtn = document.querySelector(".login");
  let registerBtn = document.querySelector(".register");
  let logoutBtn = document.querySelector(".logout");
  let isLoginedUser = users.find((user) => user.isLogined === true);

  function updateUserStatus() {
    let users = JSON.parse(localStorage.getItem("users"));
    let isLogined = users.find((user) => user.isLogined === true);
    let usernameBtn = document.querySelector(".username");
    if (isLogined) {
      usernameBtn.textContent = isLogined.username;
      loginBtn.classList.add("d-none");
      registerBtn.classList.add("d-none");
      logoutBtn.classList.remove("d-none");
    } else {
      logoutBtn.classList.add("d-none");
      loginBtn.classList.remove("d-none");
      registerBtn.classList.remove("d-none");
      usernameBtn.textContent = "Username";
    }
  }

  function logout() {
    if (isLoginedUser) {
      isLoginedUser.isLogined = false;
      localStorage.setItem("users", JSON.stringify(users));
      updateUserStatus();
      //   setTimeout(() => {
      //     window.location.href = "login.html";
      //   }, 1000);
    }
  }

  logoutBtn.addEventListener("click", logout);

  updateUserStatus();
});
