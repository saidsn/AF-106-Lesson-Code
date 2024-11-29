// console.log("Servere requsest gonderildi....");

// setTimeout(() => {
//   console.log("Serverde gelen datalar islenir....");
// }, 1000);

// console.log("Serverden  datalar alindi...");

// let users = [
//   { id: 1, name: "Ahmet" },
//   { id: 2, name: "Mehmet" },
//   { id: 3, name: "Ali" },
// ];

// function getUserId(callback) {
//   setTimeout(() => {
//     let id = 2;
//     callback(id);
//   }, 2000);
// }

// function getNameById(userId) {
//   console.log(userId);
//   setTimeout(() => {
//     let findUser = users.find((user) => user.id == userId);
//     console.log(findUser?.name);
//   }, 1000);
// }

// getUserId(getNameById);

// function getName(callback) {
//   setTimeout(() => {
//     let name = "Ahmet";
//     callback(name);
//   }, 2000);
// }

// function getSurname(callback) {
//   setTimeout(() => {
//     let surname = "karayev";
//     callback(surname);
//   }, 1000);
// }

// function getAge(callback) {
//   setTimeout(() => {
//     let age = 23;
//     callback(age);
//   }, 3000);
// }

// getName((name) => {
//   getSurname((surname) => {
//     getAge((age) => {
//       console.log(`Ad: ${name}, Soyad: ${surname}, Yas: ${age}`);
//     });
//   });
// });

// let users = [
//   { id: 1, name: "Ahmet" },
//   { id: 2, name: "Mehmet" },
//   { id: 3, name: "Ali" },
// ];

// let list = document.querySelector(".list");

// function getUsers() {
//   setTimeout(() => {
//     users.forEach((user) => {
//       list.innerHTML += `<li>${user.name}</li>`;
//     });
//   }, 1000);
// }

// function addUser(callback) {
//   setTimeout(() => {
//     let newUser = { id: 4, name: "Veli" };
//     users.push(newUser);
//     callback();
//   }, 2000);
// }
// addUser(getUsers);
// let users = [
//   { id: 1, name: "Ahmet" },
//   { id: 2, name: "Mehmet" },
//   { id: 3, name: "Ali" },
// ];

// let id = Number(prompt("id giriniz"));

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let findUser = users.find((user) => user.id == id);
//     if (findUser) {
//       resolve(findUser.name);
//     } else {
//       reject({ success: false, message: "Kullanıcı bulunamadı" });
//     }
//   }, 1000);
// });

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let findUser = users.find((user) => user.id == id);
//       if (findUser) {
//         resolve(findUser.name);
//       } else {
//         reject({ success: false, message: "Kullanıcı bulunamadı" });
//       }
//     }, 1000);
//   });
// }

// getUser()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .finally(() => {
//     console.log("İşlem tamamlandı");
//   });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .finally(() => {
//     console.log("İşlem tamamlandı");
//   });

// let users = [
//   { id: 1, name: "Ahmet" },
//   { id: 2, name: "Mehmet" },
//   { id: 3, name: "Ali" },
// ];

// let id = Number(prompt("id giriniz"));

// let promise1 = new Promise((resolve) => {
//   let findUser = users.find((user) => user.id == id);
//   setTimeout(() => {
//     resolve(`promise1: ${findUser?.name}`);
//   }, 1000);
// });
// let promise2 = new Promise((resolve) => {
//   let findUser = users.find((user) => user.id == id);
//   setTimeout(() => {
//     resolve(`promise2: ${findUser?.name}`);
//   }, 500);
// });
// let promise3 = new Promise((resolve, reject) => {
//   let findUser = users.find((user) => user.id == 4);
//   setTimeout(() => {
//     if (findUser) {
//       resolve(`promise3: ${findUser?.name}`);
//     } else {
//       reject("Bir hata oluştu");
//     }
//   }, 100);
// });

// // Promise.all([promise1, promise2, promise3])
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// Promise.race([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
